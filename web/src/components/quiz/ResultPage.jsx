import BaseLayout from "../../layouts/BaseLayout"
import congratulations from "../../assets/images/congratulations.png"
import StartQuiz from "../../pages/quiz/StartQuiz"

export default function ResultPage() {


    return (
        <BaseLayout>
            <main className="text-black">
            <img src={congratulations} alt="congratulations" />
            <h3>Congratulations</h3>
            <h4>Your Score: {}</h4>
            <button className="result-btn">Go Home</button>
            </main>
        </BaseLayout>
    )
}