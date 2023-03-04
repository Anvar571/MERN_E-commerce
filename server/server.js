require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const db_connection = require("./config/dbConnect");
const routers = require("./router/routers");
const { notFoundError, errorHandler } = require("./middleware/errorHandler");

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));

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