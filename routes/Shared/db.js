const { Connection, Request, TYPES } = require('tedious');
const config = require('../../config.json');
const {jwt} = require('jsonwebtoken')
const accessTokenSecret = 'youraccesstokensecret';



var connection = new Connection(config)

function startDb() {
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

module.exports.startDb  = startDb;
module.exports.sqlConnection  = connection;

//CREATE USER
function insert(payload){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO [user] (firstName, lastName, gender, email, password, age, hotel, preferredGender) VALUES(@firstName, @lastName, @gender, @email, @password, @age, @hotel, @preferredGender)`
        const request = new Request(sql,(err) => {
            if(err){
                reject(err)
                console.log(err)
            }

        });

        //request.addParameter('userId',TYPES.VarChar,payload.userId)
        request.addParameter('firstName',TYPES.VarChar,payload.firstName)
        request.addParameter('lastName',TYPES.VarChar,payload.lastName)
        request.addParameter('gender',TYPES.VarChar,payload.gender)
        request.addParameter('email',TYPES.VarChar,payload.email)
        request.addParameter('password',TYPES.VarChar,payload.password)
        request.addParameter('age',TYPES.Numeric,payload.age)
        request.addParameter('hotel',TYPES.VarChar,payload.hotel)
        request.addParameter('preferredGender',TYPES.VarChar,payload.preferredGender)

        request.on("requestCompleted",(row) => {
            console.log("User inserted", row);
            resolve("user Inserted", row)
        })
        connection.execSql(request);

    });
}

module.exports.insert  = insert;

function select(firstName){
    return new Promise((resolve,reject) => {
        const sql = "SELECT * FROM [user] where firstName = @firstName"
        const request = new Request(sql,(err,rowcount) =>{
            if (err){
                reject(err)
                console.log(err)
            } else if( rowcount == 0){
                reject({messsage:"user does not exit"})
            }
        });
        request.addParameter('firstName',TYPES.VarChar,firstName)
    
        request.on('row',(colums) => {
            resolve(colums)
        });
        connection.execSql(request);
    
        return firstName
    })
  
}
module.exports.select = select;

// LOGIN 
function login (payload) {
    return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM [user] where email = @email AND password = @password'
    const request = new Request(sql,(err,rowcount) =>{
        if (err){
            reject(err)
            console.log(err)
        } else if( rowcount == 0){
            reject({message: "no user found"});
        }
    });
  
      request.addParameter('email', TYPES.VarChar, payload.email)
      request.addParameter('password', TYPES.VarChar, payload.password)

      request.on('row',(colums) => {
        resolve(colums);
      })
      connection.execSql(request)
      const accessToken = jwt.sign({ email: payload.email,  pass: payload.password,  });
        
             res.json({
              accessToken});
      return "you are now logged in"
    });
  } 

module.exports.login = login;


function adminLogin (payload) {
    return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM [user] where email = @email AND password = @password AND isAdmin = @isAdmin'
    const request = new Request(sql,(err,rowcount) =>{
        if (err){
            reject(err)
            console.log(err)
        } else if( rowcount == 0){
            reject({message: "no user found"});
        }
    });
  
      request.addParameter('email', TYPES.VarChar, payload.email)
      request.addParameter('password', TYPES.VarChar, payload.password)
      request.addParameter('isAdmin', TYPES.Numeric, payload.isAdmin)

      request.on('row',(colums) => {
        resolve(colums);
      })
      connection.execSql(request)
      
        
             res.json({
              accessToken});
      return "you are now logged in"
    });
  } 

module.exports.adminLogin = adminLogin;
