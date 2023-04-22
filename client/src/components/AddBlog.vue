<script lang="ts">
import store from '@/store';
export default {
    name: 'add-blog',
    data() {
        return {
            title: '',
            message: ''
        };
    },
    methods: {
        setData() {

            if (this.title.length > 0 && this.message.length > 0) {
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let data = {
                    title: this.title.trim(),
                    message: this.message.trim(),
                    date:`${year}-${month}-${day}`
                };
                
                store.commit('addBlog',data);

                fetch('http://localhost:8080/blog', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });

                this.$router.push('/')
            }
        }
    }
}
</script>

<template>
<div class="blogAddition">
    <div class="BlogForm">
        <p>Add Blog</p>
        <div class="title">
            <p>Title</p>
            <input type="text" id="title" v-model="title" placeholder="Title" />
        </div>
        <div class="views">
            <p>Views</p>
            <textarea v-model="message"></textarea>
        </div>
        <div class="adding">
            <button ref="input" @click="setData">Add</button>
        </div>
    </div>
</div>
</template>

<style scoped>
.BlogForm {
    box-shadow: 5px 5px 5px 5px;
    width: 50%;
    margin: auto;
    margin-top: 30px;
    padding: 10px;
}

.BlogForm>p {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
}

.title {
    width: 80%;
    margin: auto;
    margin-top: 20px;
}

.title input {
    padding: 10px;
    margin-top: 10px;
    width: 90%;
}

.views {
    width: 80%;
    margin: auto;
    margin-top: 20px;
}

.views textarea {
    width: 95%;
    margin-top: 10px;
    height: 150px;
    resize: none;
}

.adding button {
    width: 20%;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: blue;
    color: white;
    border: none;
}

.adding {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
