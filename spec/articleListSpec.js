(function testArticleListExists() {
  var articleList = new ArticleList();
  console.log( "testArticleListExists returned: " + articleList.seeArticles() );
  assert.isTrue( articleList.seeArticles() instanceof Array );  
})();
