requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: ['https://code.jquery.com/jquery-3.1.1.slim.min.js'],
        tether: ['https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js'],
        bootstrap: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'],
        json: 'json-menu',
        homeScript: 'home10Script'
    }
});

require(["modules/home10Script"],
    function(homeScript) {

    }
);