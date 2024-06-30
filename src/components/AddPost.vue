<template>
  <div class="add-post">
    <h2>Add New Post</h2>
    <form @submit.prevent="savePost" class="post-form">
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

      <div class="form-group">
        <label>Time Spent:</label>
        <div class="timer">
          <span>{{ timeSpent }}</span>
          <button type="button" @click="startTimer" class="btn btn-success">Start</button>
          <button type="button" @click="stopTimer" class="btn btn-warning">Stop</button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Save Post</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import './styles/AddPost.css';
export default {
  name: 'AddPost',
  data() {
    return {
      post: {
        title: '',
        content: '',
        image: '',
        timeSpent: '00:00:00'
      },
      timer: null,
      seconds: 0,
    };
  },
  computed: {
    timeSpent() {
      const hours = Math.floor(this.seconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((this.seconds % 3600) / 60).toString().padStart(2, '0');
      const seconds = (this.seconds % 60).toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  methods: {
    ...mapActions(['addPost']),
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
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.seconds++;
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    savePost() {
      const newPost = {
        id: this.$store.state.posts.length + 1,
        title: this.post.title,
        content: this.post.content,
        image: this.post.image || require('@/assets/images/defult.jpg'),
        date: new Date().toLocaleDateString(),
        author: 'Unknown',
        timeSpent: this.timeSpent
      };

      this.addPost(newPost);
      console.log('Saving post:', newPost);
      this.$router.push('/');
    },
  },
  beforeUnmount() {
    this.stopTimer();
  }
};
</script>

