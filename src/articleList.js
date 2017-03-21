(function(exports) {

  function ArticleList() {
    this._list = [];
  };

  ArticleList.prototype.seeArticles = function() {
    return this._list;
  };

  ArticleList.prototype.addArticle = function(headline) {
    var article = new Article(headline);
    this._list.push(article);
  };

  exports.ArticleList = ArticleList;

})(this);
