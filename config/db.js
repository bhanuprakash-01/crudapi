//env==>index==>db==>server -----path of data


const { connect } = require('mongoose');

const { MONGODB_URL } = require("./index");

exports. dbConnection = () => {
     connect((MONGODB_URL), err => {
        if (err) throw err;
        console.log("MongoDB connected...");
    });
}

