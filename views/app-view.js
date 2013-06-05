AppView = Backbone.View.extend({

  events: {

  },

  initialize: function() {
    studentListTemplate = _.template( $('#student-list-template').html() );
    studentGridTemplate = _.template( $('#student-grid-template').html() );
    studentDetailTemplate = _.template( $('#student-detail-template').html() );
    appTemplate = _.template( $('#app-template').html() );

    classStudents = new Students();

    this.listenTo(classStudents, 'add', function(student){
      console.log('hello ', student.get('name'));

      new StudentListView({
        model: student
      });

      new StudentGridView({
        model: student
      });

      new StudentDetailView({
        model: student
      });
    });

    classStudents.add([
          
      {
        firstName: 'Tyler',
        lastName: 'Sloan',
        userName: '@tsloan',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/maverick.jpg"
      },
      {
        firstName: 'Andrew',
        lastName: 'McIntee',
        userName: '@Andrew',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/andrew.jpeg"
      },
      {
        firstName: 'Rasheeda',
        lastName: 'Mickel',
        userName: '@rasheeda',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/rash.jpeg"
      },
      {
        firstName: 'Daniel',
        lastName: 'Jeffords',
        userName: '@Daniel',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/daniel.jpeg"
      },
      {
        firstName: 'Lindsay',
        lastName: 'McDougall',
        userName: '@Linds',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/linds.png"
      },
      {
        firstName: 'Enrique',
        lastName: 'Acevedo',
        userName: '@Enrique',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/enrique.jpeg"
      },
      {
        firstName: 'Jennifer',
        lastName: 'Ngetich',
        userName: '@Jenn',
        bio: "Thundercats lo-fi squid roof party shoreditch put a bird on it. Truffaut gentrify cred letterpress food truck, single-origin coffee sartorial shabby chic Williamsburg you probably haven't heard of them keffiyeh small batch. Wayfarers Etsy put a bird on it, hella meggings mumblecore literally ethnic typewriter kitsch quinoa banh mi. Tonx cray mixtape cred literally, mumblecore food truck asymmetrical cardigan flannel meh. Food truck ennui beard, plaid Truffaut farm-to-table bespoke. Deep v tofu tattooed lomo readymade biodiesel cornhole wayfarers. Tote bag Vice direct trade, post-ironic blue bottle hashtag fap artisan vegan Truffaut pop-up.",
        photo: "images/jen.jpeg"
      },
      
    ]);
    this.render();
  },

  render: function() {
    $('.container').html(this.el);
    this.$el.html( appTemplate() );
    this.$el.html( studentDetailView() );
    this.$el.html( studentGridView() );
    this.$el.html( studentListView() );
  }

});

$(document).ready(function(){
  new AppView();
});