import React from 'react';
import Card from './components/Card';

function App() {

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
        <Card />
        <button className="next-btn" onClick={nextQuestion}>Next</button>
      </main>
    </div>
  );
}

export default App;
