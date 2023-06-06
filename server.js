const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const username = "";
const password = "";
const cluster = "fitness2.uwxekjf";
const dbname = "exercises";
//"mongodb+srv://user:password@fitness2.uwxekjf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);