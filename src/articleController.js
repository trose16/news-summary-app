(function(exports) {

  function ArticleController(ArticleList) {
    this._articleList = ArticleList;
    this._view = new ArticleListView(this._articleList);
  };

  ArticleController.prototype.getHTML = function() {
    var headlines = document.getElementById('headlines');
    headlines.innerHTML = this._view.convertToHTML();
  };

  exports.ArticleController = ArticleController;

})(this);
