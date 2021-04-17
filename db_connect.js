const { Connection, Request, TYPES } = require('tedious');
const config = require('./config.json')

var connection = new Connection(config)

function startDB(){
    return new Promise((resolve,reject) => {
    connection.on('connect', function(err){
        if (err){
            console.log(err);
            reject(err);
        } else {
            console.log("connected");
            resolve();
        }
    })
    connection.connect();
})
}

module.exports.startDB  = startDB;
module.exports.sqlConnection  = connection;




function insert(payload){
    return payload
}
module.exports.insert  = insert;

function select(firstName){
    return new Promise((resolve,reject) => {
        const sql = "SELECT * FROM [dbo].[user] where firstName = @firstName"
        const request = new request(sql,(err,rowcount) =>{
            if (err){
                reject(err)
                console.log(err)
            } else if( rowcount == 0){
                reject({messsage:"user does not exit"})
            }
        });
        request.addParameter('name',TYPES.VarChar,name)
    
        request.on('row',(colums) => {
            resolve(colums)
        });
        connection.execSql(request);
    
        return firstName
    })
  
}
module.exports.select  = select;
