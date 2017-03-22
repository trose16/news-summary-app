(function(exports) {

  function ArticleList() {
    this._articles = [];
  };

  ArticleList.prototype.seeArticles = function() {
    return this._articles;
  };

  ArticleList.prototype.addArticle = function(headline) {
    var article = new Article(headline);
    this._articles.push(article);
  };

  exports.ArticleList = ArticleList;

})(this);
