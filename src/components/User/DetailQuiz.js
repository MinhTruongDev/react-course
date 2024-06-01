import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionByQuizId } from "../services/apiService";

const DetailQuiz = (props) => {
    const params = useParams();
    console.log(">>>>>>>>>>>>>>>>>CHECK PARAM: ", params)

    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getQuestionByQuizId(quizId);
        console.log(">>>>>>>>>>>>>>>>>>>>>CHECK QUESTION: ", res);
        // if(res && res.EC)
    }

    return (
        <div className="detail-quiz-container">
            Detail Quiz
        </div>
    )
}
export default DetailQuiz;