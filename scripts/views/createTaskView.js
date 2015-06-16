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
    var taskName;
    var taskInput = this.$('#new-todo');
    if (e.which === 13) {
      taskName = taskInput.val();
      if (taskName === "")
      {
        alert("Please enter a task, otherwise you're just wasting time ^_^");
      }
      else
      {
        this.collection.create({
          "name": taskName.toUpperCase()
        });
        console.log("promise");
        taskInput.attr("placeholder", "Enter new task here.");
        taskInput.val("");
      }
    }
  }

});
