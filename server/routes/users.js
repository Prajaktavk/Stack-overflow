//this file is avoid the writing in the main file{index.js} the whole code and code is readable
import express from 'express';

import auth from '../models/auth.js';
import {login,signup} from '../controllers/auth.js'
import {getAllUsers,updateProfile} from '../controllers/users.js'
const router = express.Router();

 router.post('/signup',signup
    // the whole function is to be written in another file in controllers=>auth
)
router.post('/login',login)
router.get('/getAllUsers',getAllUsers)
router.get('/update/:id',auth,updateProfile)

export default router