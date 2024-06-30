<template>
  <div class="blog-home">    
    <router-link to="/add-post" class="btn btn-primary"><i class="fas fa-plus"></i>Add Post</router-link>
    <PostList />
  </div>
</template>

<script>
import PostList from './PostList.vue';

export default {
  name: 'BlogHome',
  components: {
    PostList,
  },
};
</script>

<style scoped>
.blog-home {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 20px;
  background-color: #242222;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-home h1 {
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.btn {
  display: inline-block;
  margin-bottom: 20px;
  margin-left: 10px;
  padding: 12px 14px;
  font-size: 1rem;
  background-color: #54a345;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .blog-home {
    padding: 15px;
  }

  .blog-home h1 {
    font-size: 2rem;
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.875rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
