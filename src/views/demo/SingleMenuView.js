import React, { useState } from 'react';
import './congrats.css'
const quizzes = [

  {
    title:'Quizz'
  },
  
  {
    title: 'Python Quiz',
    questions: [
      {
        question: 'What is the output of print(str[0]) if str = "Hello World!"?',
        options: ['H', 'e', 'l', 'o'],
        answer: 0
      },
      {
        question: 'What is the output of print("Hello"[1])?',
        options: ['H', 'e', 'l', 'o'],
        answer: 1
      },
      {
        question: 'What is the output of print("Hello"[-1])?',
        options: ['H', 'e', 'l', 'o'],
        answer: 3
      }
    ]
  },
  {
    title: 'Java Quiz',
    questions: [
      {
        question: 'What is the output of System.out.println(2+3+"4");?',
        options: ['9', '54', '234', 'None of the above'],
        answer: 1
      },
      {
        question: 'What is the output of System.out.println("2"+3+4);?',
        options: ['9', '54', '234', 'None of the above'],
        answer: 1
      },
      {
        question: 'What is the output of System.out.println(2+3+"4"+5+6);?',
        options: ['20', '5456', '23456', 'None of the above'],
        answer: 1
      }
    ]
  },
  {
    title: 'C Basics Quiz',
    questions: [
      {
        question: 'What is the output of printf("%d") if x=10;?',
        options: ['10', 'Garbage value', '%d', 'Compilation Error'],
        answer: 1
      },
      {
        question: 'What is the output of printf("%d%d",x,y) if x=10 and y=20;?',
        options: ['1020', '2010', '30', 'None of the above'],
        answer: 0
      },
      {
        question: 'What is the output of printf("%d%d",x,y) if x=10;?',
        options: ['10', 'Garbage value', '%d%d', 'Compilation Error'],
        answer: 1
      }
    ]
  },
  {
    title: 'C++ Quiz',
    questions: [
      {
        question: 'What is the output of the following code? int x = 10; cout << x++;',
        options: ['10', '11', 'Compilation Error', 'None of the above'],
        answer: 0
      },
      {
        question: 'What is the output of the following code? int x = 10; cout << ++x;',
        options: ['10', '11', 'Compilation Error', 'None of the above'],
        answer: 1
      },
      {
        question: 'What is the output of the following code? int x = 10; cout << x--;',
        options: ['10', '9', 'Compilation Error', 'None of the above'],
        answer: 0
      }
    ]
  },
  {
    title: 'React Quiz',
    questions: [
      {
        question: 'What is React?',
        options: ['A JavaScript library for building user interfaces', 'A CSS framework', 'A programming language', 'None of the above'],
        answer: 0
      },
      {
        question: 'What is JSX?',
        options: ['A template language', 'A JavaScript syntax extension', 'A CSS preprocessor', 'None of the above'],
        answer: 1
      },
      {
        question: 'What are React Hooks?',
        options: ['Functions that let you hook into React state and lifecycle features from function components', 'A CSS preprocessor', 'A programming language feature', 'None of the above'],
        answer: 0
      }
    ]
  }

];

const QuizCard = ({ quiz, onClick, isFirst }) => (
  <div
    className={`card p-4 m-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer`}
    onClick={onClick}
    style={{ backgroundColor: isFirst ? "#FEB2B2" : "" }}
  >
    <h2 className="text-lg font-semibold">{quiz.title}</h2>
  </div>
);


const Question = ({ question, onSelect, onNext,count2,setCount2 }) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  
  const handleNextClick = () => {
    
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      onNext();
    }, 300);
    setCount2(count2+1);
  };
 

  return (
    <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
      {question.options.map((option, index) => (
        <div key={index} className={`p-2 rounded-md hover:bg-gray-100 cursor-pointer ${selectedOption === index ? 'bg-blue-200' : ''}`} onClick={() => {
          setSelectedOption(index);
          onSelect(index);
        }}>
          <span>{option}</span>
        </div>
      ))}
      <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={handleNextClick}>Next</button>
    </div>
  );
};

const Review = ({ quiz, answers }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">Review</h2>
    {quiz.questions.map((question, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
        {question.options.map((option, optionIndex) => (
          <div key={optionIndex} className={`p-2 rounded-md ${answers[index] === optionIndex ? 'bg-blue-200' : ''}`}>
            <span>{option}</span>
            {answers[index] === optionIndex && (
              <span className={`ml-2 font-semibold ${optionIndex === question.answer ? 'text-green-500' : 'text-red-500'}`}>
                {optionIndex === question.answer ? 'Correct' : 'Incorrect'}
              </span>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Quiz = ({ quiz, onCompleted }) => {
  const[count1,setCount1]=useState(0)
  const[count2,setCount2]=useState(1)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (currentQuestionIndex >= quiz.questions.length) {
    onCompleted(score);
    return <Review quiz={quiz} answers={answers} />;
  }



  return (
    <div>
      <Question
      
        question={quiz.questions[currentQuestionIndex]}
        onSelect={answer => {
          setAnswers([...answers.slice(0, currentQuestionIndex), answer, ...answers.slice(currentQuestionIndex + 1)]);
          if (answer === quiz.questions[currentQuestionIndex].answer && count1<count2) {
            setScore(score + 1);
            setCount1(count1+1);

          }
          

        }}
        setCount2 = {setCount2}
        count2={count2}
        onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
      />
    </div>
  );
};

const ScorePopup = ({ score, onRestart }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Quiz completed!</h2>
      <p>Your score: {score} / 3</p>
      <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={onRestart}>Restart</button>
    </div>
  </div>
);

const SingleMenuView = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(null);

  return (
    <div className="p-4">
      {!currentQuiz ? (
        quizzes.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} isFirst={index === 0} onClick={() => setCurrentQuiz(index)} />
        ))
      ) : (
        <>
          <Quiz quiz={quizzes[currentQuiz]} onCompleted={score => setScore(score)} />
          {score !== null && (
            <>
              <ScorePopup score={score} onRestart={() => {
                setCurrentQuiz(null);
                setScore(null);
              }} />
              {score === quizzes[currentQuiz].questions.length && (
  <>
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md" style={{position:'absolute',top:'70px',right:'20px'}}>
        <h2 className="text-lg font-semibold mb-2">Congratulations!</h2>
        <p>You achieved a full score on the quiz!</p>
      </div>
    </div>
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <div className="paper"></div>
      <div className="paper"></div>
      <div className="paper"></div>
      <div className="paper"></div>
      <div className="paper"></div>

    </div>
    <div className="top-40 left-0 w-75 h-75 overflow-hidden">
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>


      </div>

      <div className="top-20 left-0 w-75 h-75 overflow-hidden">
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>
    <div className="paper"></div>


      </div>
  </>
)}

            </>
          )}
        </>
      )}
    </div>
  );
};

export default SingleMenuView;