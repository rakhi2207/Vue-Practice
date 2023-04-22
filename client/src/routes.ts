import AddBlog from './components/AddBlog.vue'
import main from './components/MainSection.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:main,
        path:'/'
    },
    {
        name:'AddBlog',
        component:AddBlog,
        path:'/Add'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
});


export default router