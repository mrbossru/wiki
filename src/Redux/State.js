import {Articles} from "./Data/Articles/Articles";
import {Catalogs} from "./Data/Catalogs/Catalogs";
import {Contents} from "./Data/Contents/Contents";
import {Links} from "./Data/Links/Links";
import {Questions} from "./Data/Questions/Questions";
import {Tags} from "./Data/Tags/Tags";
import {Answers} from "./Data/Answers/Answers";

export let state ={
    Articles: Articles,
    Answers: Answers,
    Catalogs: Catalogs,
    Contents: Contents,
    Links: Links,
    Questions: Questions,
    Tags: Tags
}