const Header = ({ header }) => <h1>{header}</h1>

const Total = ({ sum }) => <h3>total of {sum} exercises</h3>

const Course = ({course}) => {

  const total = course.parts.reduce(
      (previousValue, currentValue) =>  previousValue + currentValue.exercises
      , 0
      )

  return(
    <>
    <Header header={course.name} />
    <Content parts={course.parts} />
    <Total sum={total} />
    </>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
  {parts.map(part => {
   return <Part
    part={part} key={part.id}
  />
  }) }
    </>

export default Course