import React from "react";
import "./style.css";



const EmployeeTable = () => {



const employeeInfo = [
  {
    "id": 1,
    "name": "Michael Scott",
    "occupation": "Regional Manager",
    "location": "Dunder Mifflin"
  },
  {
    "id": 2,
    "name": "Jim Halpert",
    "occupation": "Co-Regional Manager" ,
    "location": "Dunder Mifflin"
  },
  {
    "id": 3,
    "name": "Dwight Schrute",
    "occupation": "Beet Farmer",
    "location": "Schrute Farms"
  },
  {
    "id": 4,
    "name": "Pam Beesley",
    "occupation": "Office Administrator",
    "location": "Dunder Mifflin"
  },
  {
    "id": 5,
    "name": "Jan Levinson",
    "occupation": "VP of NE Sales",
    "location": "Dunder Mifflin"
  },
  {
    "id": 6,
    "name": "Ryan Howard",
    "occupation": "Temp",
    "location": "Dunder Mifflin"
  },
  {
    "id": 7,
    "name": "Kelly Kapoor",
    "occupation": "Customer Service",
    "location": "Dunder Mifflin"
  },
  {
    "id": 8,
    "name": "Mose Schrute",
    "occupation": "Farm hand",
    "location": "Schrute Farms"
  },
  {
    "id": 9,
    "name": "Stanley Hudson",
    "occupation": "Sales",
    "location": "Dunder Mifflin"
  },
  {
    "id": 10,
    "name": "Phyllis Vance",
    "occupation": "Sales",
    "location": "Dunder Mifflin"
  },
  {
    "id": 11,
    "name": "Oscar Nunez",
    "occupation": "Accountant",
    "location": "Dunder Mifflin"
  },
  {
    "id": 12,
    "name": "Andrew BerNard",
    "occupation": "Sales",
    "location": "Dunder Mifflin"
  },
  {
    "id": 13,
    "name": "Daryl Philbin",
    "occupation": "Warehouse Manager",
    "location": "Dunder Mifflin"
  }
  
]

const addEmployee = (employeeInfo, index) => {





  return (
    
      <tr key = {index}>
        <td>{employeeInfo.id}</td>
        <td>{employeeInfo.name}</td>
        <td>{employeeInfo.occupation}</td>
        <td>{employeeInfo.location}</td>
        </tr>
  )
}
    return (
      <table>
        
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Occupation</th>
          <th>Location</th>
        
        </tr>
        <tbody>
          {employeeInfo.map(addEmployee)}
        </tbody>
      </table>
    )
    
  
}

export default EmployeeTable;
