(function testArticleListExists() {
  var articleList = new ArticleList();
  console.log( "testArticleListExists returned: " + articleList.seeArticles() );
  assert.isTrue( articleList.seeArticles() instanceof Array );
})();


(function testArticleListHasArticle() {
  var articleList = new ArticleList();
  articleList.addArticle();
  console.log( "testArticleListHasArticle returned: " + articleList.seeArticles() );
  assert.isTrue( articleList.seeArticles().length === 1);
})();
