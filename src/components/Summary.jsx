import quizCompletedLogo from "../assets/quiz-complete.png";
import QUESTION from "../question.js";

function Summary({ userAnswer }) {
    const skippedAnswer = userAnswer.filter((answer) => answer === null);
    const correctAnswer = userAnswer.filter((answer, index) => answer === QUESTION[index].answers[0]);

    const skippedAnswerShare = Math.round((skippedAnswer.length / userAnswer.length) * 100);
    const correctAnswerShare = Math.round((correctAnswer.length / userAnswer.length) * 100);
    const incorrectAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return (
        <div id="summary">
            <img src={quizCompletedLogo} alt="Trophy Image"/>
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswerShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswerShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswerShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswer.map((answer, index) => {
                    let answerStyle = "user-answer";

                    if (answer === null) {
                        answerStyle += " skipped";
                    } else if (answer === QUESTION[index].answers[0]) {
                        answerStyle += " correct";
                    } else {
                        answerStyle += " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTION[index].text}</p>
                            <p className={answerStyle}>{answer ?? "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default Summary;