// api.ts
import express = require('express');
import mongoose = require('mongoose');
import { User, UserModel } from '../schemas/user'

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

// BEGIN API ROUTES
const ROUTER = express.Router();

ROUTER.get('/', (req, res) => {
    res.send('From API route.')
});

ROUTER.post('/register', (req, res) => {
    let uData = req.body;
    const UserModel = new User().getModelForClass(User);
    const u = new UserModel(uData);
    u.save((err, user)=> {
        if (err) {
            console.error(err);
        } else {
            res.status(200).send(user)
            console.log("Save Success");
        }
    });
});

ROUTER.post('/login', (req, res) => {
    let uData = req.body;
    UserModel.findOne({email: uData.email}, (err, user) => {
        if (err) {
            console.error(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid Email');
            } else {
                if (user.password != uData.password) {
                    res.status(401).send('Invalid Password');
                } else {
                    res.status(200).send(user);
                }
            }
        }
    });
});

ROUTER.post('/get-blog')

module.exports = ROUTER;