import Connection from "@/app/database/config"
import { NextResponse } from "next/server"

Connection()

export const GET = async (NextRequest) => {
    try {

        const response = NextResponse.json({message:'login succesfully'})
        response.cookies.set('token',"",{httpOnly:true, expires: new Date(0)})
        return response
    }
    catch(error){
        console.log(error)
        return new Response("somthing went wrong")
    }
}

