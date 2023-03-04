const mongoose = require("mongoose");

const db_connection = async () => {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("db connection success");
    } catch (error) {
        console.log("db connection error", error);
    }
}

module.exports = db_connection;