import React, {useState} from 'react';
import Card from './components/Card';
import {fetchQuestions, Difficulty, QuestionState} from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNum, setQuestionNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setEnd(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNum(0);
    setLoading(false);
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <header>
        <h1>QUIZ</h1>
        {(end || userAnswers.length === TOTAL_QUESTIONS) && (<button className="start-btn" onClick={startQuiz}>Start quiz</button>)}
        {!end && <p className="score">Score: </p>}
        {loading && <p>Loading...</p>}
      </header>
      <main>
        {(!loading && !end) && <Card 
          questionNum={questionNum} 
          questionsTotal={TOTAL_QUESTIONS}
          question={questions[questionNum].question}
          answers={questions[questionNum].answers}
          userAnswer={userAnswers ? userAnswers[questionNum] : null}
          cb={checkAnswer}
          />}
        {!end && !loading && userAnswers.length === questionNum +1 &&
        <button className="next-btn" onClick={nextQuestion}>Next</button>}
      </main>
    </div>
  );
}

export default App;
