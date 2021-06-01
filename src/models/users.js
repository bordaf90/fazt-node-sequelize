module.exports= (sequelize, DataType) => {
    const Users= sequelize.define('Users',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        password: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        mail: {
            type: DataType.STRING,
            unique: true,
            allowNule: false,
            validate:{
                notEmpty: true
            }
        }

    });

    Users.associate= (models)=> {
        Users.hasMany(models.Tasks); // 1 usuario, muchas tareas. 1 a n. 
        
    }

    return Users;
}