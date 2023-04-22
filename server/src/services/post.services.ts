import { postRepo } from "../repositories/post.repository";

export const postBlogServices=(title:string,message:string,date:string)=>
{
   return postRepo(title,message,date);
}

