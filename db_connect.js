const { Connection, Request, TYPES } = require('tedious');
const config = require('./config.json')

var connection = new Connection(config)

function startDB(){
    return 0 
}
module.exports.startDB  = startDB;

connection.on('connect', function(err){
    if (err){
        console.log(err);
    } else {
        console.log("connected");
        // const response = executeSQL();
        // console.log(response)
    }
});
connection.connect()
module.exports.Sqlconnection  = connection;


function insert(payload){
    return payload
}
module.exports.insert  = insert;

function select(firstName){
    return firstName
}
module.exports.select  = select;


// function executeSQL(){
//     request = new Request("SELECT * FROM production.brands", function(err){
//     if (err){
//         console.log(err)}})

//     connection.execSql(request)
//     var counter = 1
//     response = {}
//     request.on('row', function(columns){
//         response[counter] = {}
//         columns.forEach(function(column){
//             response[counter][column.metadata.colName] = column.value
//         });
//         counter += 1
//     });
//     return response
// };