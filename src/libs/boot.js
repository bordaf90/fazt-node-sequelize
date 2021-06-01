
module.exports = app => {

    const connect = async () => {
        await app.db.sequelize.sync();
    }
    app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
    });
};


/*

ASI ESTÁ EN EL VIDEO, PERO NO SIRVE MÁS: 

module.exports = app => {

    app.db.sequelize.sync.done(() => {

        app.listen(app.get('port'), () => {
            console.log("Server on port", app.get('port'));
            });

    })

};

*/