export default Backbone.View.extend({
  template: JST.createTask,

  events:{
    'keypress input[type=text]': 'addTask'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  addTask: function(e) {
    if (e.which === 13) {
      console.log("PRESSED");
      var taskName = this.$('#new-todo').val();
      this.collection.create({
        "name": taskName,
        "isComplete": false
      });
    }
  }

});
