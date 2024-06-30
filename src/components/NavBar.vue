<template>
    <nav class="nav">
      <h1 class="nav__title">
        <router-link to="/" class="router-link-exact-active active">Blog Posts</router-link>
      </h1>
      <menu class="nav__menu">
        <!-- Add your menu items here -->
        <router-link to="/" class="nav__item">Home</router-link>
        <router-link to="/add-post" class="nav__item">Add Post</router-link>
      </menu>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    color: #fff;
  }
  
  .nav__title {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .nav__title a {
    color: #fff;
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
    color: #fff;
    text-decoration: none;
  }
  
  .nav__item:hover {
    text-decoration: underline;
  }
  
  .router-link-exact-active.active {
    font-weight: bold;
  }
  </style>
  