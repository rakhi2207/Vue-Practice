import { Request,Response } from "express";
import { postBlogServices } from "../services/post.services";
export const postBlogData=(req:Request,res:Response)=>
{
    try{
        const {title,message,date}=req.body;
        console.log(title,message)
        postBlogServices(title,message,date);
        res.send({message:"OK"});
    }catch(e)
    {
        res.status(500).send({message:'Internal server error'})
    }
}
