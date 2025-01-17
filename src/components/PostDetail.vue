<template>
  <div class="post">
    <header class="post__header">
      <h2 class="post__title">{{ post.title }}</h2>
      <h3 class="post__meta">
        by <a :href="`/by/${post.author}`" class="post__author">{{ post.author }}</a>
        <span class="post__sep"></span>
        <time>{{ post.date }}</time>
        <span class="post__sep"></span> || 
        <span>{{ post.timeSpent }}</span>
      </h3>
    </header>
    <div class="post__body">
      <figure class="post__figure" :style="{ backgroundImage: `url(${post.image})` }"></figure>
      <div class="post__content">
        <p>{{ post.content }}</p>
        <div class="post__actions">
          <button @click="updatePost" class="btn btn-primary">Update</button>
          <button @click="handleDeletePost" class="btn btn-danger">Delete</button>
        </div>
        <div class="timer">
          <span>{{ timeSpent }}</span>
          <button @click="startTimer" class="btn btn-success">Start</button>
          <button @click="stopTimer" class="btn btn-warning">Stop</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import './styles/PostDetail.css';
export default {
  name: 'PostDetail',
  props: ['id'],
  data() {
    return {
      post: {},
      timer: null,
      seconds: 0,
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
      this.seconds = this.convertTimeToSeconds(this.post.timeSpent);
    } else {
      console.error(`Post with ID ${postId} not found`);
    }
  },
  methods: {
  ...mapActions(['deletePost', 'updatePostTime']),
  updatePost() {
    this.$router.push({ name: 'EditPost', params: { id: this.post.id } });
  },
  handleDeletePost() { // Rename deletePost to handleDeletePost
    this.deletePost(this.post.id);
    console.log('Deleted post with ID:', this.post.id);
    this.$router.push('/');
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
    this.updatePostTime({ id: this.post.id, timeSpent: this.timeSpent });
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



