<template>
  <div class="edit-post">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <label>Title:</label>
      <input type="text" v-model="post.title" required>
      
      <label>Content:</label>
      <textarea v-model="post.content" rows="5" required></textarea>
      
      <button type="submit">Update Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditPost',
  props: ['id'], // Assuming you pass post ID as prop
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  created() {
    // Fetch post details using this.id and populate form fields
    // Example: Fetch post details from API or local storage
    this.post = {
      title: 'Sample Post Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
  },
  methods: {
    updatePost() {
      // Implement update logic (e.g., API call or local storage)
      console.log('Updating post:', this.post);
      // Redirect to home or post list after updating
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.edit-post {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-post h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.edit-post form {
  display: flex;
  flex-direction: column;
}

.edit-post label {
  font-weight: bold;
  margin-bottom: 8px;
}

.edit-post input,
.edit-post textarea {
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.edit-post textarea {
  resize: vertical; /* Allow vertical resizing of textarea */
}

.edit-post button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-post button:hover {
  background-color: #0056b3;
}
</style>
