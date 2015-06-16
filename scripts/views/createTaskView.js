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

  addTask: function() {
    console.log("PRESSED");
  }

});
