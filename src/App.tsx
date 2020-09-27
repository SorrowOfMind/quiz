import React, {useState} from 'react';
import Card from './components/Card';
import {fetchQuestions, Difficulty, QuestionState} from './API';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNum, setquestionNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  console.log(fetchQuestions(10, Difficulty.EASY));

  const startQuiz = async () => {

  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <header>
        <h1>QUIZ</h1>
        <button className="start-btn" onClick={startQuiz}>Start quiz</button>
        <p className="score">Score: </p>
      </header>
      <main>
        {/* <Card 
          questionNum={questionNum} 
          questionsTotal={TOTAL_QUESTIONS}
          question={questions[questionNum].question}
          answers={questions[questionNum].answers}
          userAnswer={userAnswers ? userAnswers[questionNum] : null}
          cb={checkAnswer}
          /> */}
        <button className="next-btn" onClick={nextQuestion}>Next</button>
      </main>
    </div>
  );
}

export default App;
