const db = require("../routes/Shared/db");
module.exports = async function (context, req) {
    context.log('JavaScript Login HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error.message);
    }
    switch(req.method) {
        case 'DELETE':
            await SpecialDeleteUserWithId(context, req);
            break;
        default:
            context.res = {
                status: 200,
                body: "This is only for deleting"
            };
            break;
    }
}


async function SpecialDeleteUserWithId(context, req){
    try{
        let payload = req.body
        let result = await db.specialDeleteUser(payload);

        context.res = {
            status: 200,
            body: result
        }
    } catch(error){
        context.res = {
            status: 400,
            body: error.message
        }

    }
}