import express from "express"

import { postAnswer,deleteAnswer} from '../controllers/Answers.js'
// import auth from '../middleware/auth.js'
import auth from "../middlewares/auth.js";
const router = express.Router();

router.patch('/post/:id',auth, postAnswer)
//the PATCH method is a request method in HTTP for making partial changes to an existing resource
//we need to update only the answer field in the database

// router.patch('/delete/:id', auth, deleteAnswer)
router.patch('/delete/:id', auth,deleteAnswer)
export default router