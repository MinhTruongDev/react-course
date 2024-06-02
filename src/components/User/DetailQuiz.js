import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from 'lodash';

import './DetailQuiz.scss';

import { getQuestionByQuizId } from "../services/apiService";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    // console.log(">>>>>>>>>>>>>>>>>CHECK PARAM: ", params)
    console.log(location);
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
            // console.log(">>>>>>>>>>>>>>>>>>>>>CHECK QUESTION GROUP BY: ", data);
        }

        // if(res && res.EC)
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                </div>
                <div className="q-content">
                    <div className="question">Question 1: Howdy Parner?</div>
                    <div className="answer">
                        <div className="a-child">A. laskdjlaksjd</div>
                        <div className="a-child">B. laskdjlaksjd</div>
                        <div className="a-child">C. laskdjlaksjd</div>

                    </div>

                </div>
                <div className="footer">
                    <button className="btn btn-secondary">PREV</button>
                    <button className="btn btn-primary">NEXT</button>
                </div>
            </div>
            <div className="right-content">
                Count Down
            </div>
        </div>
    )
}
export default DetailQuiz;