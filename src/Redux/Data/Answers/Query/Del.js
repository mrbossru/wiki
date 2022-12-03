import {answerData, Set} from "../Data/answerData";
import {Contents} from "../../Contents/Contents";

export  const Del = (id) => {
    let _answer = answerData.find(a => a.id = id);
    if(_answer){
        Set(answerData.filter(a => a.id != id));
        Contents.Del(_answer.ContentId);
    }
}