module.exports = {
    database: "task",
    username: '',
    password:'',
    params: {
        dialect: 'sqlite',
        storage: 'task-db.sqlite',
        define: {
            underscore: true
        },
        operatorAliases: false
    }
}

/*

database: es el nombre de mi BBDD. 

dialect: me indica cuál va a ser el lenguaje de mi BBDD. 
storage: me genera un archivo para ejecutar sqlite. 
define: me permite generar las reglas de mi BBDD. Ej: si quiero q los campos se completen con 
guión bajo. 
underfine: true quiere decir que se usará guión bajo.


*/