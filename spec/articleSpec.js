(function testArticleHasHeadline() {
  var headline = "Wheels on the bus stop going around!"
  var article = new Article(headline);
  console.log( "testArticleHasHeadline returned " + article )
  assert.isTrue(article.headline !== undefined);
})();


(function testGetHeadline() {
  var headline = "Wheels on the bus stop going around!"
  var article = new Article(headline);
  console.log( "testGetHeadline returned " + article )
  assert.isTrue( article.getHeadline() === headline );
})();
