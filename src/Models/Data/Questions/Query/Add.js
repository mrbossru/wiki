import {questionData} from "../Data/questionData";

export  const Add = (question) => {
    let _question = questionData.find(a => a.id == question.id);
    if(_question){
        _question.rang = question.rang;
        _question.ContentId = question.ContentId;
        _question.vCount = question.vCount;
        _question.catalogId = question.catalogId;
    } else {
      questionData.push(question);
    }
}