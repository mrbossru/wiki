import {catalogData} from "../Data/catalogData";

export const GetWorkCatalog = () => {
    return catalogData.filter(catalog => catalog.id == "-1");
}