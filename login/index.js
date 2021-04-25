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
        let email = req.query.email;
        let password = req.query.password;
        let user = await db.login(email,password)
        context.res = {
            body: user
        };
    } catch(error){
        context.res = {
            status: 400,
            body:`No user ${error.message}`
        }
    }
}
