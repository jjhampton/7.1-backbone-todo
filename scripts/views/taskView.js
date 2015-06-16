export default Backbone.View.extend ({
  template: JST.task,
  tagName: 'li',
  className: 'completed',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});
