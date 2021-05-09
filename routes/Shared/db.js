const { Connection, Request, TYPES } = require('tedious');
const config = require('../../config.json');
var jwt = require('jsonwebtoken')




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
        resolve(payload.email);
      })
      connection.execSql(request)
      return  "you are now logged in"
    });
  } 

module.exports.login = login;

function genToken(payload){
    user = {email:payload.email, password:payload.password};
    token = jwt.sign(user,"secretkey")
    return token
}
module.exports.genToken = genToken;

function vertifyToken(payload){
    return new Promise((resolve, reject) => {
    const user = payload.token
    const token = jwt.verify(user,"secretkey")
    if (token.email){
        resolve({status: 200})     
    }else{
        reject({message:"this is not valid"})
    }
    })
}

module.exports.vertifyToken = vertifyToken;

// Admin Login
function adminLogin (payload) {
    return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM [admin] where email = @email AND password = @password'
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
        resolve(payload.isAdmin);
      })
      connection.execSql(request)
      
   
      return "you are now logged in"
    });
  } 

module.exports.adminLogin = adminLogin;


// Admin update email

function specialUpdateUserEmail(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET email = @email WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('email',TYPES.VarChar,payload.email)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserEmail  = specialUpdateUserEmail;

//Admin update password


function specialUpdateUserPassword(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET password = @password WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('password',TYPES.VarChar,payload.password)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserPassword  = specialUpdateUserPassword;

// Admin update age

function specialUpdateUserAge(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET age = @age WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('age',TYPES.VarChar,payload.age)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserAge  = specialUpdateUserAge;

// Admin update preferred gender

function specialUpdateUserPreferredGender(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET preferredGender = @preferredGender WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('preferredGender',TYPES.VarChar,payload.preferredGender)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserPreferredGender  = specialUpdateUserPreferredGender;


// Admin update firstname

function specialUpdateUserFirstname(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET firstname = @firstname WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('firstname',TYPES.VarChar,payload.firstName)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserFirstname  = specialUpdateUserFirstname;

// Admin update lastname

function specialUpdateUserLastname(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET lastname = @lastname WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('lastname',TYPES.VarChar,payload.lastName)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserLastname  = specialUpdateUserLastname;

// Admin update hotel

function specialUpdateUserHotel(payload){
    

    return new Promise((resolve,reject) => {
        const sql = "UPDATE [user] SET hotel = @hotel WHERE userId = @userId"
        const request = new Request(sql,(err) =>{
            if (err){
                reject(err)
                console.log(err)
            }
        });


        request.addParameter('hotel',TYPES.VarChar,payload.hotel)
        request.addParameter('userId',TYPES.VarChar,payload.userId)


    
        request.on('requestCompleted',(row) => {
            console.log("User updated", row);
            resolve("user Updated:)", row)
        })
        connection.execSql(request);
    

    });
}

module.exports.specialUpdateUserHotel  = specialUpdateUserHotel;

// Update User
function updateUser(payload){
    
        return new Promise((resolve,reject) => {
            const sql = "UPDATE [user] SET email = @email WHERE password = @password AND firstName = @firstName"
            const request = new Request(sql,(err) =>{
                if (err){
                    reject(err)
                    console.log(err)
                }
            });

            request.addParameter('email',TYPES.VarChar,payload.email)
            request.addParameter('password',TYPES.VarChar,payload.password)
            request.addParameter('firstName',TYPES.VarChar,payload.firstName)
        
            request.on('requestCompleted',(row) => {
                console.log("User updated", row);
                resolve("user Updated:)", row)
            })
            connection.execSql(request);
        
        });
}

module.exports.updateUser  = updateUser;

function deleteUser(payload){
    
    return new Promise((resolve,reject) => {
        const sql = "Delete FROM [user] where email = @email AND password = @password"
        const request = new Request(sql,(err,rowcount) =>{
            if (err){
                reject(err)
                console.log(err)
            } else if( rowcount == 0){
                reject({messsage:"user can't be deleted"})
            }
        });
        request.addParameter('email',TYPES.VarChar, payload.email)
        request.addParameter('password',TYPES.VarChar, payload.password)
    
        request.on('row',(colums) => {
            resolve(colums)
        });
        connection.execSql(request);
    
    })
}

module.exports.deleteUser  = deleteUser;

//Delete match
function deleteMatch(payload){
    
    return new Promise((resolve,reject) => {
        let sql = "Delete FROM [match] where matchId = @matchId"
        let request = new Request(sql,(err,rowcount) =>{
            if (err){
                reject(err)
                console.log(err)
            } else if( rowcount == 0){
                reject({messsage:"match can't be deleted"})
            }
        });
        request.addParameter('matchId',TYPES.VarChar, payload.matchId)

    
        request.on('row',(colums) => {
            resolve(colums)
        });
        connection.execSql(request);
    
    })
}

module.exports.deleteMatch  = deleteMatch;

//Like
function insert(payload){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO [like] (likeOrDislike, userId, likedUserId) VALUES(@likeOrDislike, @userId, @likedUserId)`
        const request = new Request(sql,(err) => {
            if(err){
                reject(err)
                console.log(err)
            }

        });
        request.addParameter('likeOrDislike',TYPES.VarChar,payload.likeOrDislike)
        request.addParameter('userId',TYPES.VarChar,payload.userId)
        request.addParameter('likedUserId',TYPES.VarChar,payload.likedUserId)
        request.on("requestCompleted",(row) => {
            console.log("Like inserted", row);
            resolve("like Inserted", row)
        })
        connection.execSql(request);

    });
}


//Dislike