var TasksCollection =  Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/hamptonposts"
});

export default {TasksCollection};
