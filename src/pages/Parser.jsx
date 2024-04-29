import { Button, Table } from 'flowbite-react'
import Item from '../items/Item'
import { useEffect, useState } from 'react'
import axios from 'axios'
import excel from '../features/excel'
import { useNavigate } from 'react-router-dom'

const API_URL = '/api/parser'

function Parser() {
  let [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(API_URL)
    setData(response.data)
  }

  return (
    <div>
      <h1>Кількість номерів:{data.length}</h1>
      <Button
        onClick={(event) => {
          excel(data)
          navigate('/')
        }}
      >
        Завантажити excel
      </Button>
      <Table>
        <Table.Head>
          <Table.HeadCell>Номер телефона</Table.HeadCell>
          <Table.HeadCell>Сервіс</Table.HeadCell>
          <Table.HeadCell>Сума з ПДВ та ПФ</Table.HeadCell>
          <Table.HeadCell>Сума без ПДВ та ПФ</Table.HeadCell>
          <Table.HeadCell>ПФ</Table.HeadCell>
          <Table.HeadCell>ПДВ</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {data.map((item) => (
            <Item key={item.phoneNumber} item={item} />
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
export default Parser
