<template>
  <div class="edit-post">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost" class="post-form">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="post.title" @input="checkChanges" required class="form-control">
      </div>
      
      <div class="form-group">
        <label>Content:</label>
        <textarea v-model="post.content" @input="checkChanges" rows="5" required class="form-control"></textarea>
      </div>

      <div class="form-group">
        <label>Image:</label>
        <input type="file" @change="onImageChange" class="form-control">
      </div>

      <div class="image-preview" v-if="post.image">
        <img :src="post.image" alt="Post Image" class="preview-image">
      </div>

      <div class="form-group">
        <label>Time Spent:</label>
        <div class="timer">
          <span>{{ timeSpent }}</span>
          <button type="button" @click="startTimer" class="btn btn-success">Continue</button>
          <button type="button" @click="stopTimer" class="btn btn-warning">Stop</button>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary" :disabled="!isChanged">Update Post</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import './styles/EditPost.css';
export default {
  name: 'EditPost',
  props: ['id'],
  data() {
    return {
      post: {},
      originalPost: {},
      timer: null,
      seconds: 0,
      isChanged: false,
    };
  },
  computed: {
    ...mapGetters(['getPostById']),
    timeSpent() {
      const hours = Math.floor(this.seconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((this.seconds % 3600) / 60).toString().padStart(2, '0');
      const seconds = (this.seconds % 60).toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  created() {
    const postId = this.id;
    const post = this.getPostById(postId);
    if (post) {
      this.post = { ...post };
      this.originalPost = { ...post };
      this.seconds = this.convertTimeToSeconds(this.post.timeSpent);
    } else {
      console.error(`Post with ID ${postId} not found`);
    }
  },
  methods: {
    ...mapActions(['updatePost']),
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.post.image = e.target.result;
          this.checkChanges();
        };
        reader.readAsDataURL(file);
      }
    },
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.seconds++;
          this.checkChanges();
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    updatePost() {
      this.post.timeSpent = this.timeSpent;
      this.$store.dispatch('updatePost', this.post);
      console.log('Updated post:', this.post);
      this.$router.push('/');
    },
    checkChanges() {
      this.isChanged = JSON.stringify(this.post) !== JSON.stringify(this.originalPost);
    },
    convertTimeToSeconds(time) {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return (hours * 3600) + (minutes * 60) + seconds;
    },
  },
  beforeUnmount() {
    this.stopTimer();
  }
};
</script>

