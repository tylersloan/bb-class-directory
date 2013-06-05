StudentDetailView = Backbone.View.extend({

  tagName: 'div',
  className: 'student-detail',
  
  events: {

    },

  initialize: function() {
    this.render();
    $('.student-list').append(this.$el);
  },

  render: function() {
    this.$el.html( studentDetailTemplate(this.model.attributes) );
  }

});