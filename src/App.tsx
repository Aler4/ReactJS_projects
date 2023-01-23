import React, {useEffect, useState} from 'react';
import './App.css';
import {Game} from "./components/Game";
import {Result} from "./components/Result";
import {getQuestionsThunk} from "./redux/thunk";
import {useDispatch, useSelector} from "react-redux";
import {questionsSelector} from "./redux/selectors";

const questions =  [

  {
    title: 'Abondon',
    answers: ['Відвлікатись',"Покидати","Шукати"],
    correct: 1,
  },
  {
    title: 'PaPavel',
    answers: ['Сутулий, Пес, Геї, пупок коня'],
    correct: 0,
  },
  {
    title: 'Ability',
    answers: ["Здатність",'Можливість',"Покидати"],
    correct: 0,
  },
  {
    title: 'Able',
    answers: ["Працьовитий","Здатний","Дивний"],
    correct: 1,
  },
  // {
  //   title: 'Absorb',
  //   answers: ["Прати","Шкодити","Поглинати"],
  //   correct: 2,
  // },
];

function App() {
  const questions = useSelector(questionsSelector);
  const [step, setStep] = useState(0);
  let [correct, setCorrect] = useState(0);
  const dispatch = useDispatch();
  const question = questions[step];
  const onAnswering = (index:number) => {
    if (step != questions.length) {
      setStep(step+1)
    }
    if (index === question.correct){
        setCorrect(correct +1);
        console.log(correct)
    }
  };
  const checkCorr = () => {
    setCorrect(correct +1);
  };
  useEffect(() => {
    if (questions.length == 0) {
      dispatch(getQuestionsThunk())
    }
  },[questions])
  return (
      <div className="App">
        {
          step === questions.length ? (<Result correct={correct} questions={questions} />) : (<Game onAnswering={onAnswering} question={question}></Game>
          )
        }
      </div>

  );
}

export default App;
