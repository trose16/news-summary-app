(function(exports) {

  function ArticleList() {
    this._list = [];
  };

  ArticleList.prototype.seeArticles = function() {
    return this._list;
  };

  exports.ArticleList = ArticleList;

})(this);
