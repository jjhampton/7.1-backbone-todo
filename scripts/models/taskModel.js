var TaskModel = Backbone.Model.extend({
  defaults: function () {
    return {
        "isComplete": "false",
        "created_at": new Date()
    };
  }
});

var TasksCollection =  Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/hamptonposts",
  model: TaskModel
});


export default {TasksCollection};
