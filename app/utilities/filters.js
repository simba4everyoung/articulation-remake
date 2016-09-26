app.filter('url', function() {
  return function(text) {
    return text.split(' ').join('');
  };
});