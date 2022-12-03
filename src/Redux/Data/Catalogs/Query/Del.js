import {catalogData, Set} from "../Data/catalogData";
import {Articles} from "../../Articles/Articles";

export  const  Del = (id) => {
    let _catalog = catalogData.find(a => a.id == id);
    if (_catalog){
        Set(catalogData.filter(a => a.id != id));
        let articles = Articles.GetArticles(id);
        articles.forEach(a => {
            Articles.Del(a.id);
        })
    }
}