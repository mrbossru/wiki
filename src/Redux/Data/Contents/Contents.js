import {GetContent} from "./Query/GetContent";
import {CreateNewContent} from "./Query/CreateNewContent";
import {AddArticle} from "../../../components/Contents/Articles/Add/AddArticle";
import {Add} from "./Query/Add";
import {Del} from "./Query/Del";

export let Contents = {
    Add: Add,
    Del: Del,
    GetContent: GetContent,
    CreateNewContent: CreateNewContent
}