(function(exports) {

  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype.convertToHTML = function() {
    var array = this.articleList._articles;
    var html = "<ul>";
    for (var i = 0; i < array.length; i++) {
      html += `<li><div>${ array[i].headline}</div></li>`;
    }
    return html + "</ul>"
  };

  exports.ArticleListView = ArticleListView;

})(this);
