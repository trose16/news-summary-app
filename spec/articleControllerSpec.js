(function testControllerAddsHeadlineToDOM() {
  var list = new ArticleList();
  list.addArticle("This is a newsflash headline!")
  var controller = new ArticleController(list);
  var headlines = document.getElementById('headlines');
  controller.getHTML();
  console.log( "testControlerAddsHeadlineToDOM returned " + headlines.innerHTML );
  assert.isTrue( headlines.innerHTML === "<ul><li><div>This is a newsflash headline!</div></li></ul>");
})();
