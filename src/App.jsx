import { useState } from "react";
import Quizs from "./components/Quizs.jsx";
import FinalGame from "./components/FinalGame.jsx";
import Header from "./components/Header.jsx";
import { QUESTENS }  from "./data.js";


function App() {
  const [quise, setQuise] = useState(0);
  const [trueQuest, setTrueQuest] = useState(0);

  const quest = QUESTENS[quise];
  const allQuest = QUESTENS.length;

  const click = (index) => {
    setQuise(quise + 1);
    quest.extence.indexOf(index) === quest.correct ? setTrueQuest(trueQuest + 1):console.debug('');
  }

  const ofclick = () => {
    setQuise(0);
    setTrueQuest(0);
  }

  const procentTitle = () => {
    let procent = Math.round(trueQuest / allQuest * 100);
    if (procent >= 0 && procent <= 20) {
        return 'Всё Плохо(((';
    } else if (procent > 20 && procent <= 40) {
        return 'Плохо';
    } else if (procent > 40 && procent <= 60) {
        return 'Нормально';
    } else if (procent > 60 && procent <= 80) {
        return 'Хорошо!!';
    } else {
        return 'Отлично!!!)))';
    }
}

  return(
    <div className="main">
      {<Header trueQuest={trueQuest} allQuest={allQuest} quise={quise} />}
      <div className="block-center-quize">
        {quise < allQuest ? <Quizs onClick={click} quest={quest} />:
        <FinalGame  allQuest={allQuest} trueQuest={trueQuest} onClick={() => ofclick()} procentTitle={() => procentTitle()}/>}
      </div>
    </div>
  );
}

export default App;