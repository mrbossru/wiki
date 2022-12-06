export const TagsToStr = (tags) => {
    let tagsStr = "";
    tags.forEach(t => tagsStr = tagsStr + t.name + ";")
    return tagsStr
}