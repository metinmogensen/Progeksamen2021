const db = require("../routes/Shared/db");
// const {jwt} = require('jsonwebtoken')
// const accessTokenSecret = 'youraccesstokensecret';


module.exports = async function (context, req) {
    context.log('JavaScript Login HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error.message);
    }
    switch(req.method) {
        case 'POST':
            await post(context, req);
            break;
        default:
            context.res = {
                status: 200,
                body: "please get or post"
            };
            break;
    }
}


async function post(context, req){
    try{
        let payload = req.body;
        await db.login(payload);

        context.res = {
            status: 200,
        }
    } catch(error){
        context.res = {
            status: 400,
            body: error.message
        }

    }
}

// async function post(context, req){
//     try{
//         let payload = req.body;
//         await db.login(payload);
//         // const accessToken = jwt.sign({ email: payload.email,  pass: payload.password });
        
//             res.json({
//                 accessToken});
//         context.res = {
//             status: 200,          
//         }
//     } catch(error){
//         context.res = {
//             status: 400,
//             body: error.message
//         }

//     }
// }
