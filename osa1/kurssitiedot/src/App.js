const Header = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part prt={props.part1} ex={props.exercises1} />
      <Part prt={props.part2} ex={props.exercises2} />
      <Part prt={props.part3} ex={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.yy + props.kaa + props.koo}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.prt} {props.ex}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header kurssi={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}  />
      <Total yy = {exercises1} kaa = {exercises2} koo = {exercises3} />
    </div>
    
  )
}

export default App