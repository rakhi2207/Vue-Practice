import {createStore} from 'vuex';
import type { StoreData } from './interfaceUsed';
const store=createStore({
    state:
    {
        blogs:[] as StoreData[]
    },
    mutations:
    {
        addBlog(state,blogData:StoreData)
        {
            const currentData={
                title:blogData.title,
                message:blogData.message,
                date:blogData.date
            }
            state.blogs.push(currentData)
        }
    },
    getters:
    {
        getBlogs(state)
        {
            return state.blogs;
        }
    }
})

export default store