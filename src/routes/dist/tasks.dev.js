"use strict";

module.exports = function (app) {
  var Tasks = app.db.models.Tasks; // Una forma de escribir rutas: con el método route. 

  app.route('/tasks').get(function (req, res) {
    Tasks.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    console.log(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }); // Otra forma de escribir rutas:

  /*
   app.get('/tasks', (req,res) => {
      Tasks.findAll({})
      .then(result => res.json(result))
      .catch(error =>{
          res.status(412).json({msg: error.mesage});
      });
  }); 
   */
};