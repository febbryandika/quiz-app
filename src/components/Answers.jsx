import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelectAnswer }) {
    const shuffledAnswer = useRef();

    if (!shuffledAnswer.current) {
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswer.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let buttonStyle = ""

                if (answerState === "answered" && isSelected) {
                    buttonStyle = "selected";
                }

                if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                    buttonStyle = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelectAnswer(answer)}
                            className={buttonStyle}
                            disabled={answerState !== ""}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default Answers;