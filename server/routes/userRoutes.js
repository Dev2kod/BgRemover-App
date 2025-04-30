import express from 'express'
import { clerkWebhooks, useCredits } from '../controller/userController.js'
import { authUser } from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter.post("/webhooks",clerkWebhooks);
userRouter.get("/credits",authUser,useCredits)

export {userRouter}