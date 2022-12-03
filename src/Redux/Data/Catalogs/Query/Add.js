import {catalogData} from "../Data/catalogData";

export  const  Add = (catalog) => {
    let _catalog = catalogData.find(a => a.id == catalog.id);
    if(_catalog) {
        _catalog.name = catalog.name;
        _catalog.parent = catalog.parent;
        _catalog.index = catalog.index;
    } else {
        catalogData.push(catalog);
    }
}