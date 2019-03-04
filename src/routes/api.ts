// api.ts
import express = require('express');
import mongoose = require('mongoose');
import { User } from '../schemas/user'

// DB CONNECTION
const URI = "mongodb+srv://User:IrDxlO8uO4T6sPzo@cluster0-rpvs1.azure.mongodb.net/BlogDB?retryWrites=true";
mongoose.connect(URI, (err) => {
    if (err) {
        console.error('ERROR: ' +  err);
    } else {
        console.log('Connected to mongoDB');
    }
});
// END DB CONNECTION



const ROUTER = express.Router();

ROUTER.get('/', (req, res) => {
    res.send('From API route.')
})

ROUTER.post('/register', (req, res) => {
    let uData = req.body;
    const UserModel = new User().getModelForClass(User);
    const u = new UserModel(uData);
    u.save((err)=> {
        if (err) {
            console.error(err);
        } else {
            console.log("Save Success");
        }
    });
})

module.exports = ROUTER;