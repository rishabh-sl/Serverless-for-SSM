'use strict';
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello AWS Parameter Store2',
        mySecret: process.env.TOP_SECRET_VARIABLE
      }),
  };
};