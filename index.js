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