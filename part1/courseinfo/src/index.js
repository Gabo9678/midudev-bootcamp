import React from 'react'
import ReactDOM from 'react-dom'

const Header = (promps) =>{
  return <h1>{promps.course}</h1>
}
const Contenido = (content) => {
  return <p>{content.part1}{content.exercises1}</p>
} 
const Contenido2 = (content2) =>{
  return <p>{content2.part2}{content2.exercises2}</p>
}
const Contenido3 = (content3) =>{
  return <p>{content3.part3}{content3.exercises3}</p>
}
const Total = (number) =>{
  const total = number.exercises1 + number.exercises2 + number.exercises3
  return <p>Number of exercises: {total} </p> 
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Contenido part1={part1} exercises1={exercises1}/>
      <Contenido2 part2={part2} exercises2={exercises2}/>
      <Contenido3 part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2 ={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))