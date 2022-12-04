import {catalogData} from "../Data/catalogData";

export const GetCatalog = (id) => {
    return catalogData.find(catalog => catalog.id == id);
}