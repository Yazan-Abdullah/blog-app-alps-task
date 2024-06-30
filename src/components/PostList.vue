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
              <span>{{ post.timeSpent }}</span> <!-- Display the timeSpent here -->
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import './styles/PostList.css';
export default {
  name: 'PostList',
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    viewPost(id) {
      this.$router.push({ name: 'PostDetail', params: { id: id } });
    },
  },
};
</script>


