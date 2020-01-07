import React, { Component } from 'react';

import { Icon, Table } from 'semantic-ui-react'
var TableData=[
    {'teamname':'Alpha B','category':'Hardware','teamleader':'Mitesh Pandey','contact':'9811491889','categories':'Nodejs,MongoDb'},
    {'teamname':'Alpha B','category':'Hardware','teamleader':'Mitesh Pandey','contact':'9811491889','categories':'Nodejs,MongoDb'}
]
const render=_.map(TableData,(item)=>{
    return (<Table.Row>
      <Table.Cell>{item.teamname}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell textAlign='left'>{item.teamleader}</Table.Cell>

      <Table.Cell>{item.contact}</Table.Cell>
      <Table.Cell>{item.categories}</Table.Cell>



    </Table.Row>)
})

const TableExampleStructured = () => (
  <Table inverted selectable celled structured>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Category</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Team leader</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Contact Number</Table.HeaderCell>

        <Table.HeaderCell colSpan='3'>Technologies Used</Table.HeaderCell>
      </Table.Row>

    </Table.Header>

        <Table.Body>

    {render}
        </Table.Body>


  </Table>
)

export default TableExampleStructured
