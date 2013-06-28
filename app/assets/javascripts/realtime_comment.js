jQuery(document).ready(function() {
  
  var Comment = Backbone.Model.extend();
  var template = _.template($("#comment_template").html());
  var source = new EventSource('/realtime/comments');

  source.addEventListener('new', function(e) {
    data = $.parseJSON($.parseJSON(e.data));
    var comment = new Comment({title: data.title, content: data.content});
    var html = template(comment.toJSON());
    $('#comments_container').append(html);
  });
});
