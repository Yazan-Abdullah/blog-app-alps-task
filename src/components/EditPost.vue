<template>
  <div class="edit-post">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost" class="post-form">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="post.title" required class="form-control">
      </div>
      
      <div class="form-group">
        <label>Content:</label>
        <textarea v-model="post.content" rows="5" required class="form-control"></textarea>
      </div>

      <div class="form-group">
        <label>Image:</label>
        <input type="file" @change="onImageChange" class="form-control">
      </div>

      <div class="image-preview" v-if="post.image">
        <img :src="post.image" alt="Post Image" class="preview-image">
      </div>
      
      <button type="submit" class="btn btn-primary">Update Post</button>
    </form>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'EditPost',
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
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.post.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updatePost() {
      store.updatePost(this.post);
      console.log('Updated post:', this.post);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.edit-post {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-post h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.post-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

textarea.form-control {
  resize: vertical;
}

.image-preview {
  margin-bottom: 15px;
  text-align: center;
}

.preview-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
