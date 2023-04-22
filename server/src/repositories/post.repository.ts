import { BlogList } from "../database";
export const postRepo = async (title: string, message: string, date: string) => {
    try {
      const value = new BlogList({
        title: title,
        message: message,
        date: date,
      });

      let savedData=await value.save();
      return savedData;
    } catch (err) {
        console.log(err)
        return err;
    }

      //return new Promise((resolve, reject) => {
    // pool.query('Insert into blogdata values($1,$2,$3)',[title,message,date],
    //     (error:Error, results:any) => {
    //         if (error) {
    //             console.log('inside error')
    //             reject(error);
    //             return;
    //         }
    //         console.log(results)
    //         resolve(results.rows);
    //     });
 // });
};
