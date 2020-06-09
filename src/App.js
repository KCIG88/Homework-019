import React, { Component } from "react";
import "./App.css";
import EmployeeTable from "./components/table";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import SearchForm from "./components/searchform"

class App extends Component {
 
  render() {
    return (
      
      <Wrapper>
        <SearchForm />
        <Title>Employees List</Title>
      
        <EmployeeTable />
       
        
      </Wrapper>
    );
  }
}

export default App;
