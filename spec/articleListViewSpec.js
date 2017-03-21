(function testArticleListViewConvertsHTML() {
  var articleList = new ArticleList();
  articleList.addArticle("News Headline");
  var view = new ArticleListView(articleList);
  console.log( "testArticleListViewConvertsHTML returned: " + view.convertToHTML());
  assert.isTrue( view.convertToHTML() === "<ul><li><div>News Headline</div></li></ul>" )
})();
