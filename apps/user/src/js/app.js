var models = require('@bungalow/models');
var views = require('@bungalow/views');
var $ = require('jquery');
window.addEventListener('message', function (event) {
    console.log("Event data", event.data);
    if (event.data.action === 'navigate') {
        views.showThrobber();
        console.log(event.data.arguments);
        var id = event.data.arguments[0];
        alert(id);
        $('.sp-artist').hide(); 
        $('#playlists').html("");

        models.User.fromId(id).load().then(function (user) {
            console.log(user);
            user.name = user.display_name;
            var header = new views.Header(user, { type: "user" }, 128);
            $('#header').html("");
            $('#header').append(header.node);
            var playlistCollection = new views.AlbumCollection(user, {extend: false}, 80, 'playlist');

            $('#playlists').append(playlistCollection.node);

            views.hideThrobber();

        });

    }

});