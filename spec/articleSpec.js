(function testArticleHasHeadline() {
  var article = new Article();
  assert.isTrue(article.headline !== undefined);
})();


(function getHeadline() {
  var headline = "Wheels on the bus stop going around!"
  var article = new Article(headline);
  assert.isTrue(article.getHeadline === headline);
})();
