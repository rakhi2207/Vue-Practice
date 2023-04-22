import {BlogList } from "../database";

export const getRepo=async ()=>
{
    // return new Promise((resolve, reject) => {
    //     pool.query('Select * from blogdata',
    //         (error:Error, results:any) => {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             // console.log(results)
    //              resolve(results.rows);
    //         });
    // });

    try
    {
        const result=await BlogList.find();
        return result;
    }catch(err)
    {
        return err;
    }
}
