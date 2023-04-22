import { getRepo } from "../repositories/get.repository";
export const getBlogServices=()=>
{
    const tasks= getRepo();
    return tasks;
}
