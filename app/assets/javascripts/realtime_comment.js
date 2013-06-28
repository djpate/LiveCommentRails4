jQuery(document).ready(function() {
  var source = new EventSource('/realtime/comments');
  source.addEventListener('new', function(e) {
   console.log(e);
  });
});
