<script lang="ts">
export default
{
    name:"blog-header",
    props:
    {
        noOfBlogs:{
            type:Number,
            required:true
        } 
    }
}
</script>
<template>
    <div class="header">
        <div class="label">
            <p>House Of Keto</p>
            <p>Ketogenic Lifestyle Blog</p>
        </div>
        <div class="list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>What is Keto</li>
                <li>Recipes</li>
                <li>Blog Count {{ noOfBlogs }}</li>
                <div class="profile">
                    <img src="../assets/login.png">
                    <p>Login</p>
                </div>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    *
    {
        margin: 0px;
        padding: 0px;
    }
    .list li
    {
        list-style: none;
    }
    .label
    {
        width: 40%;
    }
    .label p:nth-child(1){
        font-size: 30px;
        font-weight: 500;
        font-style: italic;
    }
    .header
    {
        display: flex;
    }
    .list
    {
        width: 60%;
    }
    ul,.profile
    {
        display: flex;
        justify-content: space-around;
    }
    li ,.profile,.profile p{
        margin: auto;
    }
    .profile p
    {
        color: green;
    }
</style>