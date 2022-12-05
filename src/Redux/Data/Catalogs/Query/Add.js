import {catalogData} from "../Data/catalogData";

export  const  Add = (catalog) => {
    let _catalog = catalogData.find(a => a.id == catalog.id);
    let index = catalogData.indexOf(_catalog);
    if(_catalog) {
        catalogData[index].name = catalog.name;
        catalogData[index].parent = catalog.parent;
        catalogData[index].index = catalog.index;
        console.log(catalogData);
    } else {
        console.log("add", catalog);
        catalogData.push(catalog);
    }
}