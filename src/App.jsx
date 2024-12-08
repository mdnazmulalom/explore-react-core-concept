import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Youtube from './youtube'
import Resume from './Resume'

function App() {
  const [count, setCount] = useState(0)

  const youtuber = ['Eman Gazy', 'Ali Abdal', 'Hitesh Chowdhury', 'Nazmul Alom', 'Code Academy', 'Programming Hero'];
  
  const cv = [
    {id: 1, name: 'md nazmul Alom', experienceYear: '3', PreviousCompanyName:'Google' },
    {id: 2, name: 'Momimun Islam', experienceYear: '5', PreviousCompanyName:'Amazon' },
    {id: 3, name: 'Tarequl islam', experienceYear: '6', PreviousCompanyName:'Youtube' },
    {id: 4, name: 'MJH SHaron', experienceYear: '9',PreviousCompanyName:'Microsoft' },
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        cv.map(cv => <Resume cv = {cv}></Resume> )
      }





      <Todo task={"Lear React Js"}></Todo>

      <Youtube youtubeName="Nazmul Alom"></Youtube>

      {
        youtuber.map(youtuber => <Youtube youtubeName={youtuber}></Youtube>)
      }






      <Todo task={"Try JSX"}></Todo>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      {/* <Device></Device> */}
    </>
  )
}

// function Device (propos){
//   console.log(propos)
//   return <h2>This is Device: </h2>

// }

function Person(){
  const age = 25;
  const money = 2000;

  const person = {name: "shakib",  age: 12}

 return <h1>I am a {person.name} with age: {age + money}</h1>
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5> Developer Devo</h5>
      <p>Coding:</p>
      <form>
        <input type="text" placeholder='Name:'/>
        <input type="email" placeholder='Email:'/>
      </form>
    </div>
  )
}

function Device(){
  return <h2>This is Device:</h2>
}

function Student() {
  return (
    <div className='student'>
    <h3> This is a Student</h3>
    <p>Name: </p>
    <p>age: </p>
    </div>
  )

 }

export default App
