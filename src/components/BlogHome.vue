<template>
  <div class="blog-home">    
    <router-link to="/add-post" class="btn btn-primary"><i class="fas fa-plus"></i>Add Post</router-link>
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
