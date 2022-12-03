import {answerData} from "../Data/answerData";

export const GetAnswer = (id) => {
    return answerData.filter(answer => answer.id == id);
}