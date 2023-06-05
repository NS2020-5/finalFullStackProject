import React, { useState } from 'react'
import './App.css'
import { Navigate, useNavigate } from "react-router-dom"

const apiURL = "http://localhost:3000"
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function postData(data) {
  // Default options are marked with *
  const response = await fetch(`${apiURL}/add`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    }
  }
  
  newName = event => {
    const name = event.target.value
    this.setState({name: name})
  }
  
  newEmail = event => {
    const email = event.target.value
    this.setState({email: email})
  }

  render(){
    let name = this.state.name
    let email = this.state.email
  return (
    <div className="Login">
        <h1>Login Information</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" value = {name} onChange = {this.newName}/>
        <label for="email">Email:</label>
        <input type="text" id="email" value = {email} onChange = {this.newEmail}/>
        {/* <div class="dropdown">
          <button onClick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        </div> */}
        <Submit name = {this.state.name} email = {this.state.email} />
    </div>
  )
  }}

function Submit({name, email}) {
  const navigate = useNavigate();
  function submitData(){
    if (name && email) {
      postData({name, email})
      .then(entertainer => {
        console.log(entertainer)
        navigate("/page2");
      })
    }
  }
  return <button onClick = {submitData}>Submit</button>
}

// this is for future reference
// https://www.w3schools.com/html/html_forms.asp
export default Login


