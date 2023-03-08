require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const db_connection = require("./config/dbConnect");
const bodyparser = require("body-parser");
const routers = require("./router/routers");
const { notFoundError, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cookieParser());
app.use(express.json());

app.use(cors());

async function server() {
    try {
        await db_connection();

    } catch(err){
        console.log(err);
    } finally {
        app.use("/api", routers);

        app.use(notFoundError);
        
        app.use(errorHandler);
    }
}

server();

app.listen(process.env.PORT, () => {
    console.log(`Server listen on ${process.env.PORT} port`);
})