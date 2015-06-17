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
    console.log(this.collection.toJSON());
    //map collection from the isComplete value
    var mappedCollection = _.map(this.collection.toJSON(), function(task) {
      return task.isComplete;
    });
    console.log(mappedCollection);
    var areCompletedTodos = _.contains(mappedCollection, true);
    console.log(areCompletedTodos);

    // var areCompletedTodos = _.chain(this.collection.toJSON())
    //   .map(function(task) {
    //     return task.isComplete;
    //   })
    //   .contains(true);
    // UNABLE TO GET UNDERSCORE CHAIN TO WORK

    console.log(areCompletedTodos);
    if (areCompletedTodos) {
      this.model.destroy({
        success: function(){
          console.log("destroy successful");
        },
        error: function() {
          console.log("destroy NOT successful");
        }
      });
    }
  }

});
