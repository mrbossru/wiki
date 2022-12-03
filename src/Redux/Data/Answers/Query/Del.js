import {answerData} from "../Data/answerData";

export  const Del = (id) => {
    let _answer = answerData.find(a => a.id = id);
    if(_answer){
        const index = answerData.indexOf(_answer);
        answerData.slice(index,1);
    }
}