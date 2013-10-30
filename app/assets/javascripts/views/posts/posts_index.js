JournalApp.Views.PostsIndexView = Backbone.View.extend({
  template: JST["posts/index"],

  events: {
    "click li.button" : "deletePost"
  },

  initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function() {
    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  deletePost: function(event) {
    $.ajax({
      url: "/posts/" + $(event.currentTarget).attr("data-id"),
      type: "DELETE",
      success: function() {
        alert("Post deleted!")
      }
    });
  }

});