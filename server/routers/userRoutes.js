import express from "express";
import {Login,Signup} from "../controler/userControler.js"

const router =express.Router();


//cmd
// http://localhost:7069/user
router.post('/login',Login);
router.post('/signup',Signup);





export default router;