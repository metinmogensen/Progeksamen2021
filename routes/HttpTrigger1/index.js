const db = require("../Shared/db");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error
        .message);
    }
    switch(req.method) {
        case 'GET':
            await get(context, req);
            break;
            case 'POST':
                await post(context, req);
                break
                default:
                    context.res = {
                        body:"please get or post"
                    };
                    break
    }
}

async function get(context, req){
    try{
        let firstName = req.query.firstName;
        let user = await db.select(firstName)
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

async function post(context, req){
    try{
        let payload = req.body;
        await db.incert(payload);
        context.res = {
            body: {status:"Det virker " + payload + " er sendt"}
        }
    }catch(error){
        context.res = {
            status: 400,
            body: error.message
        }

    }
}
