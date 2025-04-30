import jwt from "jsonwebtoken"

const authUser=(req,res,next)=>{

    try {
          const {token} = req.headers

          if(!token){
            res.json({
                success:false,
                msg:"not authorized login again"
            })
          }
          console.log("reached line 14");
          
          console.log("token ",token);
          const token_decode = jwt.decode(token)
          req.body.clerkId = token_decode.clerkId
          console.log("token: ",token_decode.clerkId);
          next();
    } catch (error) {
        console.log(error);
        res.json({success:false,msg3:error.message})
    }
}

export {authUser}