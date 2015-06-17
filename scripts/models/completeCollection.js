export default Backbone.Collection.extend({
  add: function() {
    Backbone.Collection.prototype.add.apply(this, arguments);
  }
});
