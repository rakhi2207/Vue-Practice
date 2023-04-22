import { Request,Response } from "express";
import { getBlogServices } from "../services/get.services";
export const getBlogData=async (req:Request,res:Response)=>
{
    try{
        const value=await getBlogServices();
        res.status(200).json(value)
    }catch(e)
    {
        console.log(e)
        res.status(500).send({message:'Internal server error'})
    }
}
