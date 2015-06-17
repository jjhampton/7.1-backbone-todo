export default Backbone.View.extend ({
  template: JST.task,
  tagName: 'li',

  events: {
    'click .toggle': 'toggleCompleteStatus',
    'click .destroy': 'deleteTask',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var completedStatus = this.model.get('isComplete');
    if (completedStatus) {
      this.$el.addClass('completed');
    }

    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleCompleteStatus: function() {
    var completedStatus = this.model.get('isComplete');
    this.$el.toggleClass('completed', !completedStatus);
    this.model.set('isComplete', !completedStatus);
    this.model.save(null,{
      dataType: 'text',
      success: function(model,response) {
        console.log("save successful");
      },
      error: function(model,response) {
        console.log("save NOT successful" + response.toJSON());
      }
    });
    console.log("YA");
  },

  deleteTask: function() {
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
