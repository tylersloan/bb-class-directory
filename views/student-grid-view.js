StudentGridView = Backbone.View.extend({

  tagName: 'div',
  className: 'student-grid',
  
  events: {
    'click #user': 'viewDetails'
  },

  initialize: function() {
    this.render();
    $('.student-list').append(this.$el);
  },

  render: function() {
    this.$el.html( studentGridTemplate(this.model.attributes) );
  },

  viewDetails: function() {
    $('.student-list').html('');
    new StudentDetailView({
      model: this.model
      });
  }
    
})