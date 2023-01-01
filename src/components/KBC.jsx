import React, { useEffect, useState } from "react";
import "./KBC.css";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/Correct.mp3";
import wrong from "../assets/Wrong.mp3";
const KBC = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)



  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const clickHandler = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(700, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(4000, () =>
      {
        if(a.correct){
            correctAnswer();
            delay(1000,()=>{
                setQuestionNumber((prev) => prev+1);
            selectedAnswer(null)
            })
            
        }else{
            wrongAnswer()
            delay(1000,()=>{
                setStop(true)
            })
            
        }
      }
    );
  };
  return (
    <div className="kbc">
      <div className="question">{question?.question}</div>
      <div className="answerContainer">
        {question?.answer.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => clickHandler(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KBC;
