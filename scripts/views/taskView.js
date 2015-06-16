export default Backbone.View.extend ({
  template: JST.task,
  tagName: 'li',

  events: {
    'click .toggle': 'toggleCompleteStatus',
    'click .destroy': 'deleteTask'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleCompleteStatus: function() {
    var completedStatus = this.model.get('isComplete');
    this.$el.toggleClass('completed', !completedStatus);
    this.model.set('isComplete', !completedStatus);
  },

  deleteTask: function() {
    console.log("DELETE CLICKED");
    this.model.destroy({
      success: function(){
        console.log("destroy successful");
      },
      error: function() {
        console.log("destroy NOT successful");
      }
    });
  }

});
