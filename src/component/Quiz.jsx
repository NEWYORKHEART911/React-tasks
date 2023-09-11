import React, { useState } from 'react';
import styles from './Quiz.css';

function Quiz() {

    const [questions] = useState([
        {id: 1, question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome', 'Berlin'], correctAnswer: 'Paris'},
        {id: 2, question: 'Who painted the Mona Lisa?', options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'], correctAnswer: 'Leonardo da Vinci'},
        {id: 3, question: 'What is the largest planet is our solar system?', options: ['Jupiter', 'Saturn', 'Mars', 'Earth'], correctAnswer: 'Jupiter'},
        {id: 4, question: 'Where is the Taj Mahal located?', options: ['Russia', 'Brazil', 'India', 'Turkey'], correctAnswer: 'India'},
    ])

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    //to eliminate pressing right answer multiple times before submitting
    //from adding more than 1 to the correct total
    const [answeredCorrectly, setAnsweredCorrectly] = useState({})

    const handleOptionSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.correctAnswer;

        if(isCorrect && !answeredCorrectly[currentQuestion.id]) {
            setCorrectAnswersCount(correctAnswersCount+1);
            ///... is the spread operator which updates the previous 'answeredCorrectly' state variable
            setAnsweredCorrectly((prev)=>({...prev, [currentQuestion.id]: true}));
        }
    }

    const handleNextQuestion = () => {
        if(currentQuestionIndex+1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex+1);
        } else {
            setQuizCompleted(true);
        }
    }

    return(
        <div class="theQuiz">
            {!quizCompleted ? (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <ul>
                        {questions[currentQuestionIndex].options.map((option) => (
                            <li key={option}>
                                <label>
                                    <input type="radio" value={option} checked={selectedOption===option} onChange={()=>handleOptionSelect(option)} />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button class="quizbtn" onClick={handleNextQuestion}>Next</button>
                    </div>
            ) : (
                <div>
                    <h2>Quiz Complete</h2>
                    <p>Your score: {correctAnswersCount}/{questions.length}</p>
                </div>
            )}
        </div>
    )
}

export default Quiz;