import { Table } from 'flowbite-react'
import React from 'react'

function Item(item) {
  return item.item.services.map((service, index) => (
    <React.Fragment key={index}>
      <Table.Row>
        <Table.Cell>{item.item.phoneNumber}</Table.Cell>
        <Table.Cell>{service.name}</Table.Cell>
        <Table.Cell>{service.cost}</Table.Cell>
        <Table.Cell>{(service.cost / 1.275).toFixed(2)}</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>{((service.cost / 1.275) * 0.2).toFixed(2)}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{item.item.phoneNumber}</Table.Cell>
        <Table.Cell>{service.name},ПФ</Table.Cell>
        <Table.Cell>{service.cost}</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>{((service.cost / 1.275) * 0.075).toFixed(2)}</Table.Cell>
        <Table.Cell>0</Table.Cell>
      </Table.Row>
    </React.Fragment>
  ))
}
export default Item
