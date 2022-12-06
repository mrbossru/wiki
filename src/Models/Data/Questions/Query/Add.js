import {questionData} from "../Data/questionData";

export  const Add = (question) => {
    let _question = questionData.find(a => a.id == question.id);
    if(_question){
        _question.rang = question.rang;
        _question.qContentId = question.qContentId;
        _question.aContentId = question.aContentId;
        _question.vCount = question.vCount;
        _question.catalogId = question.catalogId;
        _question.index = question.index;

    } else {
      questionData.push(question);
    }
}
