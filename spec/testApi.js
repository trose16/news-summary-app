(function() {

  var url = "http://content.guardianapis.com/search?from-date=2017-03-01&q=kids&api-key="+GUARDIAN_API_KEY;

  function makeRequest() {
    var articles = $.get(url, function(data) {
      console.log(data);
    });
  };


  makeRequest();

})();
