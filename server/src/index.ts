import {router} from './routes/route1.routes'
import bodyParser from "body-parser";
import cors from 'cors'


const express=require('express');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/",router);
app.listen("8080",()=>
{
    console.log("server is running");
})
