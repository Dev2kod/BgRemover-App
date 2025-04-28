import { create } from 'domain';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    clerkId:{type: String,unique:true },
    email:{type: String,unique:true},
    photo:{type: String,unique:true},
    firstName:{type: String,unique:true},
    lastName:{type: String,unique:true},
    creditBalance:{type:Number,default:5}
})

const userModel = mongoose.model("user",userSchema)

export {userModel}; 