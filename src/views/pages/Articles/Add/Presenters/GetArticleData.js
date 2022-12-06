export const GetArticleData = (model, id) => {
    let content, article;
    if (id) {
        article = model.Articles.GetArticle(id);
    }
    if(article) {
        content = model.Contents.GetContent(article.contentId);
        if(!content) {
            content = model.Contents.CreateNew();
            article.contentId = content.id;
        }
    } else {
        article = model.Articles.CreateNew();
        content = model.Contents.CreateNew();
        article.contentId = content.id;
    }
    let tags = model.Tags.GetTags(article.id);
    return {article: article,  content: content, tags: tags}
}