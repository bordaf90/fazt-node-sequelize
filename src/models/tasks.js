module.exports= (sequelize, DataType) => {
    const Tasks= sequelize.define('Tasks', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users); // Muchas tareas pertenecen a 1 solo usuario. n a 1. 
    };

    return Tasks;

};