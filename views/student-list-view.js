StudentListView = Backbone.View.extend({
  
  tagName: 'div',
  className: 'student',

  events: {

  },

  initialize: function() {
    this.render();
    $('.students').append(this.$el)
  },

  render: function() {
    this.$el.html( studentListView(this.model.attributes) );
  }
  
})