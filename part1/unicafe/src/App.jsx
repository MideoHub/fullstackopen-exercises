import { useState } from 'react'

  const Header = ({ headers }) =>{
    return(
      <h1> {headers} </h1>
    )
  }

  const Button = ({ handleClick, text }) =>{
    return(
      <button onClick= {handleClick} > {text} </button>
    )
  } 

  const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};



  const Statistics = ({ good ,neutral, bad, total }) => {

  if(total === 0){
    return (
    <p>No feedback given</p>

  )
  }

  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100 + " %";

  return (
    <table>

      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePercentage} />
      </tbody>

    </table>
  );
};


const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);

  const Headers = {
    header1 : "give feedback",
    header2 : "statistics"
}

const handelGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(total + 1);
  };

  console.log("good value:", good);
 


const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
  };

const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(total + 1);
  };

 console.log("total value:", total);

  return (
    <>
    <Header headers={Headers.header1} />

    <Button handleClick={handelGoodClick} text="good" />
    <Button handleClick={handleNeutralClick} text="neutral" />
    <Button handleClick={handleBadClick} text="bad" />

    <Header headers={Headers.header2} />

    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  )
}

export default App