import {questionData} from "../Data/questionData";

export  const Del = (id) => {
    let _question = questionData.find(a => a.id == id);
    if(_question){
        const  index = questionData.indexOf(_question);
        questionData.slice(index, 1);
    }
}