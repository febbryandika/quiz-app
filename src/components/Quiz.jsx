import { useState, useCallback } from "react";

import QUESTIONS from "../question.js"
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const currentQuestionIndex = userAnswers.length;
    const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary userAnswer={userAnswers} />
        );
    }

    return (
        <div id="quiz">
            <Question
                key={currentQuestionIndex}
                index={currentQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;