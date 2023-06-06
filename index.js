// const express = require('express');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();
// const port = 3000;

const { MongoClient } = require('mongodb')

const url = "mongodb+srv://user:password@fitness2.uwxekjf.mongodb.net/?retryWrites=true&w=majority"


const client = new MongoClient(url)





const mydata = {
    exercise: "deadlift",
    reps: 10,
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result;
}

// const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

// async function readexer(client, newlisting) {
//     const result = await client.db("myexercises").collection('exercises').findOne({ exercise_name: "squat" });
//uday_0_Idontknow5
// }

async function main() {

    try {
        await client.connect();
        await listDatabases(client);
        const result = await client.db("myexercises").collection('exercises').findOne({ exercise_name: "squat" });
        console.log(result)
        module.exports = result
    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }

}





main().catch(console.error);






















// MongoClient.connect(url, (err, db) => {

//     if (err) throw err;

//     console.log('hello you connected to mongodb');

// })

//default express commands below

// app.get("/", (req, res) => {
//     res.send("hello world from express");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`)
// });