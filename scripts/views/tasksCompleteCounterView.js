export default Backbone.View.extend({
  template: JST.tasksCompleteCounter,
  tagName: 'button',
  id: 'clear-completed',

  initialize: function() {
    this.render();
    // this.listenTo(this.collection)
  },

  render: function() {
    this.$el.html(this.template({
      tasksCompleted: this.getCompletedTodoCount()
    }));
  },

  getCompletedTodoCount: function() {
    var count = _.filter(this.collection.toJSON(), function(task) {
      return task.isComplete === true;
    });
    return count.length;
  }
});
