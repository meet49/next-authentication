import Connection from "@/app/database/config"
import User from "@/model/user"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

Connection()

export const POST = async (NextRequest) => {
    try {
        const body = await NextRequest.json()
        const {  username, password } = body;

        if (!username || !password){
            return new Response("username and password is required",{status:401})
        }

        const user = await User.findOne({username})

        if(!user){
            return new Response("Username does not exist",{status:400})
        
        }

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return  new NextResponseResponse("Incorrect password",{status:400})
        }

        const tokenData ={
            username:user.username,
            id:user._id
        }

        const token = jwt.sign(tokenData,process.env.JWT_SECRETKEY,{expiresIn:'1d'})

        const response = NextResponse.json({message:'login succesfully'})
        response.cookies.set('token',token,{httpOnly:true})
        return response
    }
    catch(error){
        console.log(error)
        return new Response("somthing went wrong",{status:500})
    }
}

