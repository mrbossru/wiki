export const GetQuestionData = (model, id) => {
    let qContent, aContent, question;
    if (id) {
        question = model.Questions.GetQuestion(id);
    }
    if(question) {
        qContent = model.Contents.GetContent(question.qContentId);
        if(!qContent) {
            qContent = model.Contents.CreateNew();
            question.qContentId = qContent.id;
        }
        aContent = model.Contents.GetContent(question.aContentId);
        if(!aContent) {
            aContent = model.Contents.CreateNew();
            question.aContentId = aContent.id;
        }
    } else {
        question = model.Questions.CreateNew();
        qContent = model.Contents.CreateNew();
        aContent = model.Contents.CreateNew();
        question.qContentId = qContent.id;
        question.aContentId = aContent.id;
    }
    let tags = model.Tags.GetTags(question.id);
    return {question: question,  aContent: aContent, qContent: qContent, tags: tags}
}