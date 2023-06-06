const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
const express = require('express');
//const Router = require("./routes")

const app = express();

// MediaDeviceInfo().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(mongoDB);
// }

app.get('/', (req, res) => {
    res.send('index.html');
    console.log("I will be shown on the terminal")
})

app.listen(3000);

// })



//

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World From express");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`);
// })