<template>
  <nav class="nav" :class="{ 'sticky': isSticky }">
    <h1 class="nav__title">
      <router-link to="/" class="router-link-exact-active active">Blog Posts</router-link>
    </h1>
    <menu class="nav__menu">
      <router-link to="/" class="nav__item">Home</router-link>
    </menu>
  </nav>
</template>

<script>
import './styles/NavBar.css';
export default {
  name: 'NavBar',
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.pageYOffset > 0;
    }
  }
};
</script>

