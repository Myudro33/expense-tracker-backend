import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {
    registerUser,
    loginUser,
    getUserInfo
} from '../controller/authController.js'
import upload from '../middleware/uploadMiddleware.js';

const router =express.Router();

router.get('/getUser',protect,getUserInfo)
router.post("/register",registerUser)
router.post("/login",loginUser)
router.post('/upload-image',upload.single('image'),(req,res)=>{
    if(!req.file){
        return res.status(400).json({message:'no file selected'})
    }
    const imageUrl =`${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    res.status(200).json({imageUrl})
})

export default router