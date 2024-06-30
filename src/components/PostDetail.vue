<template>
  <div class="post">
    <header class="post__header">
      <h2 class="post__title">{{ post.title }}</h2>
      <h3 class="post__meta">
        by <a :href="`/by/${post.author}`" class="post__author">{{ post.author }}</a>
        <span class="post__sep"></span>
        <time>{{ post.date }}</time>
      </h3>
    </header>
    <div class="post__body">
      <figure class="post__figure" :style="{ backgroundImage: `url(${post.image})` }"></figure>
      <div class="post__content">
        <p>{{ post.content }}</p>
        <div class="post__actions">
          <button @click="updatePost" class="btn btn-primary">Update</button>
          <button @click="deletePost" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'PostDetail',
  props: ['id'],
  data() {
    return {
      post: {},
    };
  },
  created() {
    const postId = this.id;
    this.post = store.posts.find(post => post.id == postId);
  },
  methods: {
    updatePost() {
      this.$router.push({ name: 'EditPost', params: { id: this.post.id } });
    },
    deletePost() {
      store.deletePost(this.post.id);
      console.log('Deleted post with ID:', this.post.id);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Existing styles */
.post {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post__header {
  text-align: center;
}

.post__title {
  font-size: 2.5rem;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.post__meta {
  font-size: 1rem;
  color: #888;
}

.post__author {
  color: #3498db;
  text-decoration: none;
}

.post__author:hover {
  text-decoration: underline;
}

.post__body {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.post__figure {
  flex: 1 1 33%;
  height: auto;
  padding-top: 33%; /* This gives an approximate aspect ratio */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.post__content {
  flex: 2 1 66%;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
}

.post__actions {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
  margin-right: 10px;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}

.btn-danger:hover {
  background-color: #c82333;
}
</style>
