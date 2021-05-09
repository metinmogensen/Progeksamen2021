const db = require("../routes/Shared/db");




module.exports = async function (context, req) {
    context.log('JavaScript Login HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error.message);
    }
    switch(req.method) {
        case 'GET':
            await get(context, req);
            break;
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
        let result = await db.login(payload);
        let token = await db.genToken(payload);
        console.log(token);

        context.res = {
            status: 200,
            body: {token}
        }
    } catch(error){
        context.res = {
            status: 400,
            body: error.message
        }

    }
}

async function get(context, req){
    try{
        let payload = req.body
        result = await db.vertifyToken(payload);
        console.log(result)

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
//         // const accessToken = jwt.sign({ email: payload.email,  pass: payload.password,  });
        
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
