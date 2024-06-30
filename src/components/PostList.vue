<template>
  <div class="post-list">
    <ul>
      <li v-for="post in posts" :key="post.id" class="preview" @click="viewPost(post.id)">
        <figure class="preview__figure">
          <img :src="post.image" alt="" class="preview__image"/>
          <figcaption class="preview__details">
            <div class="preview__title">
              {{ post.title }}
            </div>
            <div class="preview__meta">
              <time class="preview__published">{{ post.date }}</time>
              <a href="#" class="preview__author">{{ post.author }}</a>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'PostList',
  data() {
    return {
      posts: store.posts,
    };
  },
  methods: {
    viewPost(id) {
      this.$router.push({ name: 'PostDetail', params: { id: id } });
    },
    deletePost(id) {
      // Implement delete logic (e.g., API call or local storage)
      console.log('Deleting post with ID:', id);
      // Remove post from this.posts
      this.posts = this.posts.filter(post => post.id !== id);
    },
  },
};
</script>

<style scoped>
/* Existing styles */
.post-list {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 0;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.preview {
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300px;
  height: 450px;
  position: relative;
}

.preview__figure {
  height: 100%;
}

.preview__image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distortion */
}

.preview__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out; /* Smooth transition */
}

.preview:hover .preview__details {
  opacity: 1; /* Show on hover */
}

.preview__title {
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
}

.preview__meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 0.9rem;
}

.preview__published {
  margin-right: 10px;
}

.preview__author {
  color: #fff;
  text-decoration: none;
}

.preview__author:hover {
  text-decoration: underline;
}
</style>
