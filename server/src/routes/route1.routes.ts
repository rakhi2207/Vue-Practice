import {postBlogData} from '../controllers/post.controller';
import {getBlogData} from '../controllers/get.controller';
const app=require('express');
export const router=app.Router();

router.post("/blog",postBlogData);
router.get("/blog",getBlogData);
