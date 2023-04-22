<script lang="ts">
export default {
    name: "blog-subPost",
    data() {
        return {
            le: this.data.le
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
<div class="card" :class="{lastEdit:le}">
    <div class="image">
        <img :src="data.image">
    </div>
    <div class="content">

        <div class="info">
            <img src="../assets/login.png">
            <div class="profileInfo">
                <p>{{ data.profile }}</p>
                <div class="timing">
                    <p>{{ data.Date }}</p>
                </div>
            </div>
        </div>

        <div class="middleContent">
            <p>{{ data.Heading }}</p>
            <p>{{ data.topic }}</p>
        </div>

        <div class="footer">
            <p>Views {{ data.view }}</p>
            <p>Comments {{ data.Comment }}</p>
            <div class="likes">
                <img src="../assets/like.png">
                <p>{{ data.likes }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    display: flex;
    width: 60%;
    margin: auto;
    background-color: white;
}

.lastEdit
{
    box-shadow: 5px 5px 5px 5px;;
}
.image {
    width: 50%;
}

.image img {
    width: 100%;
    height: 100%;
}

.content {
    width: 50%;
    padding: 20px;
}

.info {
    width: 100%;
}

.profileInfo p {
    margin: 0px;
}

.timing p:nth-child(2) {
    padding-left: 3px;
    padding-right: 3px;
}

.info,
.timing,
.footer,
.likes {
    display: flex;
}

.middleContent p:nth-child(1) {
    color: rgb(7, 49, 7);
    font-weight: 900;
    font-size: 20px;
    text-align: center;
}

.middleContent {
    height: 50%;
}

.footer {
    border-top: 2px solid black;
    justify-content: space-evenly;
}

.likes img {
    margin: auto;
    height: 60%;
}

.card {
    margin-bottom: 20px;
}
</style>
