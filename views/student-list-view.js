StudentListView = Backbone.View.extend({
  
  tagName: 'div',
  className: 'student',

  events: {
    'click #user': 'viewDetails'
  },

  initialize: function() {
    this.render();
    $('.student-list').append(this.$el);
  },

  render: function() {
    this.$el.html( studentListTemplate(this.model.attributes) );
  },

  viewDetails: function() {
    $('.student-list').html('');
    new StudentDetailView({
      model: this.model
      });
  }
  
})