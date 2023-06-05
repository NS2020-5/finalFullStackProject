import React, { useState } from 'react'
import './App.css' 
import {Navigate, useNavigate} from 'react-router-dom'

const apiURL = "http://localhost:3000"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: null
      },
      name: null,
      user: []
    }
  }
  searchedName = event => {
    const newFormData = {... this.state.formData, name: event.target.value};
    this.setState({formData: newFormData})
  }

  getData = () => {
    fetch(`${apiURL}/entertainer`)
    .then((res) => res.json())
    .then((json) => {
      const user = json.filter(a => {return a.name == this.state.formData.name})[0];
      console.log(user);
    })}

  render() {
    let name = this.state.name
    let user = this.state.user

    return(
      <div className = "searchPage">
        <h1>NSagum Entertainment</h1>
        <label for="name">Search by name:</label>
        <input type="text" id="name" value = {name} onChange = {this.searchedName}/>
        <button onClick = {this.getData}>fetchTest</button>
        <div>{user}</div>
      </div>
    )
  }}

export default SearchBar
