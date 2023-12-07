import quizAppLogo from "../assets/quiz-logo.png";

function Header() {
    return (
        <header>
            <img src={quizAppLogo} alt={"Quiz App Logo"}/>
            <h1>React Quiz</h1>
        </header>
    );
}

export default Header;