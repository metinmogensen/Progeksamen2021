// /functions/login.js

const jwt = require('jsonwebtoken');
const user = require("routes/Shared/db.js");

const JWT_EXPIRATION_TIME = '5m';

/**
  * POST /sessions
  *
  * Returns a JWT, given a username and password.
  * @method login
  * @param {String} event.body.username
  * @param {String} event.body.password
  * @throws Returns 401 if the user is not found or password is invalid.
  * @returns {Object} jwt that expires in 5 mins
  */
module.exports.handler = (event, context, callback) => {
  const { username, password } = JSON.parse(event.body);

  try {
    // Authenticate user
    const user = users.login(username, password);

    // Issue JWT
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });
    const response = { // Success response
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token,
      }),
    };

    // Return response
    callback(null, response);
  } catch (e) {
    const response = { // Error response
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: e.message,
      }),
    };
    callback(null, response);
  }
};