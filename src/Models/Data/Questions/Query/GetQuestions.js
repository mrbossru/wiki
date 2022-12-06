import {questionData} from "../Data/questionData"

export const GetQuestions = (root) => {
    return questionData.filter(question => question.catalogId==root).sort((a,b)=> a.index-b.index);
}