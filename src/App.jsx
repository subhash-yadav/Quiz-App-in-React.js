import { useEffect, useMemo, useState } from "react";
import "./App.css";
import KBC from "./components/KBC";
import Start from "./components/Start";
import Timer from "./components/Timer";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product ?",
      answer: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Cars",
          correct: false,
        },
        {
          text: "Computer",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Corsair is a company that specializes in what type of product ?",
      answer: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: false,
        },
        {
          text: "Cars",
          correct: false,
        },
        {
          text: "Computer",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question:
        "Samsung is a company that specializes in what type of product ?",
      answer: [
        {
          text: "Phone",
          correct: true,
        },
        {
          text: "Watches",
          correct: false,
        },
        {
          text: "Cars",
          correct: false,
        },
        {
          text: "Computer",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 125000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
   [])

  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      {username ?(
        <>
        <div className="main">
        {stop ? (
          <h1 className="moneyEarned">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"> <Timer setStop={setStop} questionNumber={questionNumber}/> </div>
            </div>
            <div className="bottom">
              <KBC
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>{" "}
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
