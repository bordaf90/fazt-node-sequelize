import express from 'express';

module.exports = app =>{

    // Settings:
    app.set('port', process.env.PORT || 3000);
    app.set('json spaces', 4);

    // middelwares: es una función que se ejecuta antes de recibir una url. 

    app.use(express.json());
    app.use((req, res, next) => {
        // delete req.body.id;
        next();
      });
    

};