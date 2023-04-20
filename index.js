app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    //new configuration parameter
    defaultLayout: 'login',
    }));
    app.get('/', (req, res) => {
    //instead of res.render('main', {layout: 'index'});
    res.render('main');
    });

    //sets up rout for url with get method 
    //when req is made to root url, callback func goes down
    //res.render renders our main view handlebars to go to user as html