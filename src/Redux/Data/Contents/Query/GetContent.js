import {contentData} from "../Data/contentData";

export const GetContent = (id) => {
    return contentData.filter(content => content.id == id);
}