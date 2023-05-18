import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

// import React, { useState } from 'react'
// // import './index.css'

// /*
//  * EXAMPLE: async / await
//  * Fetch Weather API data for San Mateo
//  */
// async function fetchWeatherData() {
//     const data = await fetch("https://api.weather.gov/gridpoints/MTR/86,95/forecast")
//     return data.json()
// }

// /*
//  * EXAMPLE: React Class Component
//  * WeatherDashboard takes no props, stores `temp` and `todos` in state
//  * "parent" component of Thermometer, Humility, ToDoList
//  */ 
// export default class WeatherDashboard extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             temp: undefined,
//             todos: ['too', 'much', 'work']
//         }
//     }

//     // the componentDidMount function gets run once, the first
//     // time this component is rendered
//     componentDidMount() {
//         this.updateWeatherData()
//         setInterval(this.updateWeatherData, 100000)
//     }

//     updateWeatherData = () => {
//         // EXAMPLE: Promises!
//         // calling fetchWeatherData() returns a promise
//         // use ".then(callback)" to specify what we want to 
//         // do with the data when it is returned from the API
//         fetchWeatherData().then(data => {
//             const todayForecast = data.properties.periods[0]
//             console.log(todayForecast.temperature)
//             this.setState({
//                 temp: todayForecast.temperature
//             })
//         })
//     }

//     // event handler function, passed as props
//     // to the Temperature component
//     updateTemperature = (newTemp) => {
//         // console.log(`new temp =${newTemp}`)
//         this.setState({
//             temp: newTemp
//         })
//     }

//     // a "noop" event handler function
//     fakeUpdateTemperature(e) {
//         return // do nothing
//     }

//     render() {
//         const { temp } = this.state
//         const humidity = 95
//         const hourly = 2    

//         return (
//             <div>
//                 {/* EXAMPLE: composing multiple instaces of the same Temperature component */}
//                 <Thermometer temp={temp} onSubmit={this.updateTemperature} color={"yellow"} age={42}/> 
//                 <Thermometer temp={temp} onSubmit={this.updateTemperature}/>
//                 <Thermometer temp={temp} onSubmit={this.fakeUpdateTemperature}/>
//                 <Humidity humidity={humidity} />
//                 <HourlyForecast hourly={hourly}/>
//                 {/* EXAMPLE: using array.map to create multiple components from an array */}
//                 {this.state.todos.map((todo, i) => <ToDo item={todo} key={todo + i} />)}
//             </div>
//         )
//     }
// }

// /*
//  * EXAMPLE: modifying css styles on user events in React
//  * ToDo component - displays a "todo" item with a check button
//  * crosses out text when button is pressed
//  */ 
// class ToDo extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             className: ""
//         }
//     }

//     crossOutTodo= () => {
//         if (this.state.className) {
//             this.setState({
//                 className: ""
//             })
//         } else {
//             this.setState({
//                 className: "crossout"
//             })
//         }
//     }

//     render() {
//         const { item } = this.props
//         return (
//             <div>
//                 <button onClick={this.crossOutTodo} ></button>
//                 <span className={this.state.className}>{item}</span>
//             </div>
//         )
//     }
// }

// /*
//  * EXAMPLE: React Functional Component with `useState`
//  * (i.e. a React Component represented as a function)
//  * takes props `temp` and `onSubmit` as parameters
//  */ 
// function Thermometer({ temp, onSubmit }) {
//     const [inputValue, updateInputValue] = useState(undefined)
    
//     function inputUpdate(evt) {
//         updateInputValue(evt.target.value)
//     }
    
//     return (
//         <React.Fragment>
//             <div>Temp is {temp > 100 ? "uh oh" : temp}</div>
//             <input value={inputValue} onChange={inputUpdate} />
//             <button onClick={() => onSubmit(inputValue)}>Submit</button>
//         </React.Fragment>
//     )
// }

// function HourlyForecast() {
//     return <div>TODO</div>
// }

// function Humidity() {
//     return <div>TODO</div>
// }

export default App
