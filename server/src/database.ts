// const Pool = require('pg').Pool
import mongoose from "mongoose"

// export const pool = new Pool({
//     user:"postgres",
//     host:"localhost",
//     database:"blog",
//     password:"Aditi",
//     port:5432
// })

mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>{console.log('connection Successful')})
.catch((err)=>{console.log(err)})

const blogSchema=new mongoose.Schema({
    title:String,
    message:String,
    date:String
});

export const BlogList=mongoose.model('BlogList',blogSchema);
