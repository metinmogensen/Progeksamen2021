const db = require("../routes/Shared/db");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error.message);
    }
    switch(req.method) {
        case 'PUT':
            await put(context, req);
            break;
        default:
            context.res = {
                status: 200,
                body: "please get or post"
            };
            break;
    }
}


async function put(context, req){
    try{
        let payload = req.body;
        await db.specialUpdateUserLastName(payload);
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