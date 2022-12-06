import {TagsToStr} from "./TagsToStr";

export const AddTag = (model, data) => {
    let tagsElement = document.getElementById("tags");
    let tagInput = document.getElementById("tag");
    if (tagsElement) {
        if(tagInput.value != "")
        {
            if (!data.tags.find(el => el.name == tagInput.value)) {
                let newTag = model.Tags.CreateNew();
                newTag.name = tagInput.value;
                data.tags = [
                    ...data.tags,
                    newTag
                ]
                tagsElement.textContent = TagsToStr(data.tags);
            }
        }
        tagInput.value= "";
    }
}