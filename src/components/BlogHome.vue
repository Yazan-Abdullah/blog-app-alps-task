<template>
  <div class="blog-home">    
    <router-link to="/add-post" class="add-post-btn">Add Post</router-link>
    <PostList />
  </div>
</template>

<script>
import PostList from './PostList.vue';
import './styles/BlogHome.css';
export default {
  name: 'BlogHome',
  components: {
    PostList,
  },
};
</script>
