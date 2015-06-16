var TaskModel = Backbone.Model.extend({
  defaults: {
    "isComplete": false
  }
});

var TasksCollection =  Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/hamptonposts",
  model: TaskModel
});


export default {TasksCollection};
