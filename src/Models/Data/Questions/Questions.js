import {GetQuestionRnd} from "./Query/GetQuestionRnd";
import {GetQuestion} from "./Query/GetQuestion";
import {Del} from "./Query/Del";
import {Add} from "./Query/Add";
import {CreateNew} from "./Query/CreateNew";

export const Questions = {
    Add: Add,
    Del: Del,
    GetQuestion: GetQuestion,
    GetQuestionRnd: GetQuestionRnd,
    CreateNew: CreateNew
}