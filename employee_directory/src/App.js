import React, { Component } from "react";
import './App.css';
import employees from "./employeeDirectory.json";
import Table from "./components/table";
import Wrapper from "./components/wrapper"
import Title from "./components/title"


class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };


 // Map over this.state.employees and render a FriendCard component for each friend object
 render() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <Table />
      {this.state.employees.map(employees => (
        <Table
          id={employees.id}
          // key={employees.id}
          name={employees.name}
          occupation={employees.occupation}
          location={employees.location}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;