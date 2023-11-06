import React, { useState } from 'react'
import { quiz } from '../data/quiz'

function QuizApp() {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    const [answer, setAnswer] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer: 0
    })

    const { question, choices, correctAnswer } = quiz.questions[activeQuestion]

    const handleNext = () => {
        if (activeQuestion !== quiz.questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
           
        } else {
            setShowResult(true)
            setActiveQuestion(0)
        }

        if (selectedAnswer === true) {
            setAnswer((pre) => ({
                ...pre,
                score: pre.score + 5,
                correctAnswer: pre.correctAnswer + 1
            }))
        } else {
            setAnswer((pre) => ({
                ...pre, wrongAnswer: pre.wrongAnswer + 1
            }))
        }

        setActiveQuestionIndex(null)
    }

    const handleList = (item, index) => {
        setActiveQuestionIndex(index)
        if (item === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const handleRestart = () => {
        setActiveQuestion(0);
        setActiveQuestionIndex(null);
        setShowResult(false);
        setSelectedAnswer('');
        setAnswer({
            score: 0,
            correctAnswer: 0,
            wrongAnswer: 0
        });
    }

    return (
        <>
            <div className='main'>
            <h1 style={{textAlign:'center',color:'white',marginBottom:'20px'}}>Quiz App</h1>

                <div className='quiz-container'>
                    {!showResult ? (
                        <div className='quiz-section'>
                            <h1>{activeQuestion + 1}<span className='countslash'>/{quiz.questions.length}</span></h1>
                            <h3>{question}</h3>
                            <ul>
                                {
                                    choices?.map((item, index) => (
                                        <li key={item} onClick={() => handleList(item, index)} className={activeQuestionIndex === index ? "list selectedlist" : "list"}>{item}</li>
                                    ))
                                }
                            </ul>
                            <div className='next-btn'><button onClick={() => handleNext()} disabled={activeQuestionIndex === null}>{activeQuestion === quiz.questions.length - 1 ? "Finish" : "Next"} </button></div>
                        </div>
                    ) :
                        <div className='result-style'>
                            <h1>Result</h1>
                            <p>Total Score: {answer.score}</p>
                            <p>Correct Answers: {answer.correctAnswer}</p>
                            <p>Wrong Answers: {answer.wrongAnswer}</p>
                            <div className='restart-button'> <button onClick={handleRestart}>Restart</button></div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default QuizApp