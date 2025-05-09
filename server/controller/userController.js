import {Webhook} from 'svix'
import { userModel } from '../models/userModel.js'
// manage clerk with db
//http://localhost:4000/api/user/webhooks

const clerkWebhooks = async(req,res)=>{

    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET) 
        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-signature":req.headers["svix-signature"],
            "svix-timestamp":req.headers["svix-timestamp"]
        })

        const {data,type} =req.body;

        switch (type) {
            case "user.created":{ 
                
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name, 
                    photo: data.image_url,
                }
                await userModel.create(userData)
                res.json({msg:"created"})

                break;}

            case "user.updated":{
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name, 
                    photo: data.image_url,
                } 
                await userModel.findOneAndUpdate({clerkId:data.id},userData)
                res.json({
                    msg:"updated"
                }) 

            break;}
                
            case "user.deleted":{
                
            await userModel.findOneAndDelete({clerkId:data.id})
            res.json({
                msg:"deleted"
            })    
                
            break;}
        }

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message})
    }

}

//controller funtion to get user credits

const useCredits = async(req,res)=>{
    try {
        const {clerkId} = req.user

       const userData= await userModel.findOne({clerkId})
        res.json({success:true, credits:userData.creditBalance})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,msg1:error.message})
    }
}

export {useCredits, clerkWebhooks};