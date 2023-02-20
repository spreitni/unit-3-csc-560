












/*
let express = require('express')
let router = express.Router()
var collection;

router.get('/playersAll', (req, res) => {

    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    }
    else{
        res.send('You have requested a person')
    }
    

})

router.get("/playersAll", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    })
});


//test functionality
router.get('/error', (req,res) => {
    throw new Error('this is a forced error.')
})

module.exports = router

*/