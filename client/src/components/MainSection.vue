<script lang="ts">
import { mapGetters } from "vuex";
import TheHeader from "./HeaderSection.vue";
import PostSection from "./PostSection.vue";
import AddBlogModal from "./AddBlogModal.vue";
import store from "@/store";
import type { BlogData } from "@/interfaceUsed";
export default {
  name: "blog-homePage",
  components: {
    TheHeader,
    PostSection,
    AddBlogModal,
  },
  data() {
    return {
      postData: [] as BlogData[],
    };
  },
  computed: {
    ...mapGetters(["getBlogs"]),
  },
  methods: {
    moveAddBlog() {
      this.$router.push("/Add");
    },
    showData() {
      for (let blog of this.getBlogs) {
        this.postData.push({
          profile: "User",
          Date: blog.date,
          Heading: blog.title,
          topic: blog.message,
          image: "/src/assets/post3.webp",
          view: 0,
          Comment: 0,
          likes: 0,
          le: false,
        });
      }
    },
  },
  async mounted() {
    if (this.getBlogs.length == 0) {
      const value = await fetch("http://localhost:8080/blog");
      const fetchedData = await value.json();
      for (let blog of fetchedData) {
        store.commit("addBlog", blog);
      }
    }
    this.showData();
  },
};
</script>
<template>
  <TheHeader :noOfBlogs="getBlogs.length" />
  <div class="above">
    <img src="../assets/keto.jpg" />
    <div class="cover"></div>
    <p>Welcome to the House of Keto</p>
    <p>Get into a low carb lifestyle with an easy-to-follow meal plan</p>
  </div>

  <div class="middle">
    <div class="data">
      <div class="outerMain">
        <div class="adding">
          <button @click="moveAddBlog">Write Blog</button>
        </div>
        <div class="firstInsight">
          <div class="posts" v-for="item in postData">
            <PostSection :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.above img {
  width: 100%;
  height: 400px;
}

.cover {
  position: absolute;
  top: 0px;
  background-color: black;
  height: 400px;
  opacity: 0.6;
  width: 100%;
}

.above {
  position: relative;
}

.above p {
  position: absolute;
}

.adding {
  width: 100%;
  display: flex;
  justify-content: center;
}

.above p:nth-child(3) {
  top: 80px;
  right: 0px;
  font-size: 60px;
  color: white;
  font-weight: 400;
  z-index: 2;
  opacity: 1;
}

.above p:nth-child(4) {
  top: 200px;
  right: 300px;
  color: white;
}

.outerMain {
  background-color: antiquewhite;
  padding: 30px;
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
</style>
