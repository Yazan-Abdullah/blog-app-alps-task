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
          <button @click="deletePost" class="btn btn-danger">Delete</button>
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
    deletePost() {
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

<style scoped>
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
  padding-top: 33%;
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

.timer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
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

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-warning {
  background-color: #ffc107;
  color: #fff;
}

.btn-warning:hover {
  background-color: #e0a800;
}
</style>
