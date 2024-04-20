// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";



dotenv.config({
    path: './env'
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
}
)
.catch((error) => {
    console.log("MONGODB connection fail main-index.js", error);
})














/*
import express from "express";
const app = express();

// function connectDB() {}

// connectDB();
; (async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error("ERROR", error);
        throw err
    }
})()*/
