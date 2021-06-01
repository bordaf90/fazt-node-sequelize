
import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';

let db = null;

module.exports = app => {
  if(!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    
    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(filename => {
      const modelDir = path.join(dir, filename);
    //const model = sequelize.import(modelDir); ESTO FIGURA EN EL VIDEO, PERO NO VA, ESTÁ DESACTUALIZADO. 
      const model= require(modelDir);

      db.models[model.name] = model;
    });
    
    Object.keys(db.models).forEach(key => {
      //db.models[key].associate(db.models); ESTO FIGURA EN EL VIDEO, PERO NO VA, ESTÁ DESACTUALIZADO.

      if (db.models[key].hasOwnProperty('associate')){
        db.models[key].associate(db.models);
    }

    });
  }

  return db;
};

/*

fs es un módulo de js que permite leer directorios. 
path es un módulo que concatena directorios. 


*/