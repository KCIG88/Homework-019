import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (

 
    <table class="table table-bordered">
  <thead>
    <tr>

    <th scope="col">id</th>

      <th scope="col">Name</th>
      <th scope="col">Occupation</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>

  //   <table>
  //   <tr>
  //     <th>Name</th>
  //     <th>Occupation</th> 
  //     <th>Location</th>
  //   </tr>
  //   <tr>
  //     <td>{props.name}</td>
  //     <td>{props.occupation}</td>
  //     <td>{props.occupation}</td>


  //   </tr>
    
  // </table>
  );
}

export default EmployeeTable;
