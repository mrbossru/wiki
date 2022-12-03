import {catalogData} from "../Data/catalogData";

export  const  Del = (id) => {
    let _catalog = catalogData.find(a => a.id == id);
    if (_catalog){
        const index = catalogData.indexOf(_catalog);
        catalogData.slice(index, 1);
    }
}