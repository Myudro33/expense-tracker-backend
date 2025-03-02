import express from 'express'
import {
    registerUser,
    loginUser,
    getUserInfo
} from '../controller/authController.js'

const router =express.Router();

router.get('/getUser',getUserInfo)
router.post("/register",registerUser)
router.post("/login",loginUser)


export default router