const express  = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoose = require('mongoose');
const server = "mongodb://127.0.0.1:27017/";
const name = "Unit2";

var app = express ();
app.use(BodyParser.json());
app.use(express.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(3000, () => {
    console.log('app is running in port 3000')
    mongodb();
});

// 3 default APis
app.post("/AddPerson", (request, response) => {
    collection.insert(request.body, (error, result) => {
        response.send(result.result);
    });
});

app.put("/changePlayerAge/:id", (request, response) => {
    collection.findByIdAndUpdate({"_id" : new ObjectId(request.params.id)}, request.body, (error, result) => {
       response.send(result);
    })
})

app.delete("/deletePlayer/:id", (request, response) => {
    collection.findByIdAndRemove({"_id" : new ObjectId(request.params.id)}).then(player => {
        response.send({message:  "player deleted successfully!"})
    })
});

// 5 queries
app.get('/allPlayers', (request, response) => {
    collection.find({}).toArray((error, result) => {
        response.send(result);
    })
});

app.get('/findCollege', (request, response) => {
    collection.find({College:`${request}`}).toArray((error, result) => {
        response.send(result);
    })
});
app.get('/findWeight', (request, response) => {
    collection.find({Weight:`${request}`}).toArray((error, result) => {
        response.send(result);
    })
});

app.get('/findByFirstName', (request, response) => {
    collection.find({first_name:`${request}`}).toArray((error, result) => {
        response.send(result);
    })
});

app.get('/findByFirstName', (request, response) => {
    collection.find({age:`${request}`}).toArray((error, result) => {
        response.send(result);
    })
});

// random testing stuff 
app.get('/api', (req, res) => res.send('Its working!'));

app.get('/error', (req,res) => {
    throw new Error('this is a forced error.')
})
app.get('/foo', (req,res) => {
    res.send(foo());
})
//the cornection method that i think worked
async function mongodb() {
   let client = await MongoClient.connect(server, { useNewUrlParser: true }, (error) => {
        if(error) {
            throw error;
        }

    });

    database = client.db(name);
    collection = database.collection("Unit2");
    console.log("Connected to `" + name + "`!");
}
// calling a function from an api
function foo(){
    return"foo"
}
/*require('mongoose');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const dbConnect = require('mongoose');


app.get('/', async(req,res)=>{
    let data = await dbConnect();
    data = await  data.find().toArray();
    res.send({data})
})


app.listen(3000, (req,res) => {
    console.log('app is running in port 3000')
})
app.get('/getPlayers', (req,res) => {
    res.send('You have requested a person')
})

app.get('/error', (req,res) => {
    throw new Error('this is a forced error.')
})

d





/*
let express = require('express')
let app = express()
let APIroute = require('./routes/APIRoutes')
let path = require('path')
let bodyParser = require('body-parser')
const server = 'mongodb://127.0.0.1:27017/'
const database = 'Unit2'


app.use(APIroute)
app.use((req,res,next)=>{
    res.status(404).send('we think you are lost') 
 })




async function mongodb() {
    let client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error) => {
         if(error) {
             throw error;
         }
 
     });
 
     database = client.db(DATABASE_NAME);
     collection = database.collection("Unit2");
     console.log("Connected to `" + DATABASE_NAME + "`!");
 }
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))

app.listen(5000, () => {
    mongodb();
});

*/