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

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 20px;
  color: #111010;
  transition: top 0.3s ease;
}

.sticky {
  position: fixed;
  top: 0;
  width: 97%;
  z-index: 1000; 
}

.nav__title {
  margin: 0;
  font-size: 1.5rem;
}

.nav__title a {
  color: #0e0d0d;
  text-decoration: none;
}

.nav__menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item {
  margin-left: 20px;
  color: #141313;
  text-decoration: none;
}

.nav__item:hover {
  text-decoration: underline;
}

.router-link-exact-active.active {
  font-weight: bold;
}
</style>
