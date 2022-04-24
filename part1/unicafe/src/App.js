import { useState } from 'react'

const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = () => good+neutral+bad
  const average = () => (good-bad)/all()
  const positive = () => good/all()*100
  if (all() !== 0) {
    return (
      <>
      <h2>statistics</h2>
      <table>
      <tbody>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all()} />
      <StatisticLine text='average' value={average()} />
      <StatisticLine text='positive' value={positive()+' %'} />
      </tbody>
      </table>
      </>
    )
  }
  return (
    <>
    <h2>statistics</h2>
    <p>No feedback given</p>
    </>
  )

}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good+1)
  }

  const neutralHandler = () => {
    setNeutral(neutral+1)
  }

  const badHandler = () => {
    setBad(bad+1)
  }


  return (
    <div>
      <Header />
      <Button handler={goodHandler} text='good'/>
      <Button handler={neutralHandler} text='neutral'/>
      <Button handler={badHandler} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
