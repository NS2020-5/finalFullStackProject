import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [0, 0, 0],
      
    }
  }

  counterSeconds() {
    let seconds = this.state.time[2] + 1
    let minutes = this.state.time[1]
    let hours = this.state.time[0]

    if (seconds > 59) {
      seconds = 0
      minutes += 1
    } 

    if (minutes > 59) {
      minutes = 0
      hours += 1
    }
    this.setState({time: [hours, minutes, seconds]})
  }

  componentDidMount() {
      setInterval(() => this.counterSeconds(), 1000)
      }
    
  render() {
       let seconds = this.state.time[2]
       let minutes = this.state.time[1]
       let hours = this.state.time[0]
    
        return (<div>
           <div class = "title">A.R.C. Regulation Panel</div>
           <div class = "time">Time {hours} hr : {minutes} min : {seconds} sec</div>
        </div>)
      
       }
      }   


ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);

