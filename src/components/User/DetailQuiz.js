import { useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from 'lodash';

import { getQuestionByQuizId } from "../services/apiService";

const DetailQuiz = (props) => {
    const params = useParams();
    // console.log(">>>>>>>>>>>>>>>>>CHECK PARAM: ", params)

    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getQuestionByQuizId(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;

            // console.log(">>>>>>>>>>>>>>>>>>>>>CHECK QUESTION: ", raw);
            let data = _.chain(raw)
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        // console.log(">>>>>>>>>>ITEM ANSWER: ", item.answers);
                        answers.push(item.answers);
                    });
                    // console.log('>>>>>>>>>CHECK KEY: ', key, ' | VALUE: ', value);

                    return { questionId: key, answers, questionDescription, image }
                })
                .value();
            console.log(">>>>>>>>>>>>>>>>>>>>>CHECK QUESTION GROUP BY: ", data);
        }

        // if(res && res.EC)
    }

    return (
        <div className="detail-quiz-container">
            Detail Quiz
        </div>
    )
}
export default DetailQuiz;