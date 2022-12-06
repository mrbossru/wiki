import {GetArticles} from "./Query/GetArticles";
import {GetArticle} from "./Query/GetArticle";
import {CreateNew} from "./Query/CreateNew";
import {Add} from "./Query/Add";
import {Del} from "./Query/Del";

export let Articles = {
    GetArticles: GetArticles,
    GetArticle: GetArticle,
    CreateNew: CreateNew,
    Add: Add,
    Del: Del
}