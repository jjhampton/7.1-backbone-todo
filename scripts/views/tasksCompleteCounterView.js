export default Backbone.View.extend({
  template: JST.tasksCompleteCounter,
  tagName: 'button',
  id: 'clear-completed',

  initialize: function() {
    this.render();
    // this.listenTo(this.collection)
  },

  render: function() {
    this.getCompletedTodoCount();
    this.$el.html(this.template());
  },

  getCompletedTodoCount: function() {
    // var mappedCollection = _.map(this.collection.toJSON(), function(task) {
    //   return task.isComplete;
    // });
    // var areAnyTodosComplete = _.contains(mappedCollection, true);
    // this.model.set('areAnyTodosComplete', areAnyTodosComplete);
    console.log(this.collection.toJSON());
    var count = _.filter(this.collection.toJSON(), function(task) {
      return task.isComplete === true;
    });
    console.log(count);
  }
});
