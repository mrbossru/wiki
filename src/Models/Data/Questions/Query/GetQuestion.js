import {questionData} from "../Data/questionData";

export  const GetQuestion = (id) => {
    return questionData.find(a => a.id == id);
}