import axios from 'axios'

const API_URL = '/api/parser'

const parsData = async () => {
  const response = await axios.get(API_URL)
  console.log(response.data)
  return response.data
}

const parser = {
  parsData,
}

export default parser
