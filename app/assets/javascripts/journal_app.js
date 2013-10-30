window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.posts = new JournalApp.Collections.Posts();
    JournalApp.posts.fetch({
      success: function() {

      }
    });

    var postsIndex = new JournalApp.Views.PostsIndexView({
      collection: JournalApp.posts
    });

    $('body').html(postsIndex.render().$el);
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
