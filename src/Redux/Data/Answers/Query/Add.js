import {answerData} from "../Data/answerData";

export const Add = (answer) => {
    let _answer = answerData.find(a => a.id = answer.id);
    if(_answer){
        _answer.contentId = answer.contentId
    } else {
        answerData.push(answer);
    }
}