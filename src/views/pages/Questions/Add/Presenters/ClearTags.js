export  const ClearTags = (model, data) => {
    data.tags=[];
    document.getElementById("tags").textContent = "";
}