import {GetArticles} from "./Query/GetArticles";
import {GetArticle} from "./Query/GetArticle";
import {CreateNew} from "./Query/CreateNew";
import {Add} from "./Query/Add";
import {Del} from "./Query/Del";
import {GetArticlesTree} from "./Query/GetArticlesTree";
import {SetArticlesTree} from "./Query/SetArticlesTree";

export let Articles = {
    GetArticles: GetArticles,
    GetArticle: GetArticle,
    CreateNew: CreateNew,
    Add: Add,
    Del: Del,
    GetArticlesTree: GetArticlesTree,
    SetArticlesTree: SetArticlesTree
}