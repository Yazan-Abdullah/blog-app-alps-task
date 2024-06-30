<template>
    <div class="post">
      <header class="post__header">
        <h2 class="post__title">{{ post.title }}</h2>
        <h3 class="post__meta">
          by <a :href="`/by/${post.author}`" class="post__author">{{ post.author }}</a>
          <span class="post__sep"></span>
          <time>{{ post.date }}</time>
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostDetail',
    props: ['id'],
    data() {
      return {
        post: {},
      };
    },
    created() {
      // Fetch the post details using the id prop
      // For this example, we'll use static data
      const postId = this.id;
      const posts = [
      { 
        id: 1, 
        title: 'The Great Gatsby', 
        content: 'A novel written by American author F. Scott Fitzgerald. It is set in the summer of 1922 in the fictional town of West Egg on prosperous Long Island.', 
        image: require('@/assets/images/018101S.jpg'), 
        date: 'Wed Jun 10, 2020', 
        author: 'F. Scott Fitzgerald' 
      },
      { 
        id: 2, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/9781536164565-e1568736381512.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
      { 
        id: 3, 
        title: '1984', 
        content: 'A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime.', 
        image: require('@/assets/images/Books_HD_(8314929977).jpg'), 
        date: 'Mon Aug 3, 2020', 
        author: 'George Orwell' 
      },
      { 
        id: 4, 
        title: 'Pride and Prejudice', 
        content: 'A romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.', 
        image: require('@/assets/images/9781536164565-e1568736381512.jpg'), 
        date: 'Thu Sep 17, 2020', 
        author: 'Jane Austen' 
      },
      { 
        id: 5, 
        title: 'The Catcher in the Rye', 
        content: 'A novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. The novel was included on Time\'s 2005 list of the 100 best English-language novels written since 1923.', 
        image: require('@/assets/images/Books_HD_(8314929977).jpg'),
        date: 'Sun Oct 11, 2020', 
        author: 'J. D. Salinger' 
      },
      { 
        id: 6, 
        title: 'The Hobbit', 
        content: 'A children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.', 
        image: require('@/assets/images/018101S.jpg'), 
        date: 'Tue Nov 3, 2020', 
        author: 'J. R. R. Tolkien' 
      },
      { 
        id: 7, 
        title: 'Moby-Dick', 
        content: 'An 1851 novel by Herman Melville. The book is the sailor Ishmael\'s narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on the ship\'s previous voyage bit off Ahab\'s leg at the knee.', 
        image: require('@/assets/images/018101S.jpg'), 
        date: 'Fri Dec 18, 2020', 
        author: 'Herman Melville' 
      },
      { 
        id: 8, 
        title: 'War and Peace', 
        content: 'A novel by the Russian author Leo Tolstoy, published from 1865 to 1869. It is regarded as one of Tolstoy\'s finest works and as one of the greatest novels ever written.', 
        image: require('@/assets/images/books-5937823_1280.jpg'), 
        date: 'Mon Jan 11, 2021', 
        author: 'Leo Tolstoy' 
      },
      ];
      this.post = posts.find(post => post.id == postId);
    },
    methods: {
      updatePost() {
        // Implement update logic (e.g., navigate to edit page)
        this.$router.push({ name: 'EditPost', params: { id: this.post.id } });
      },
      deletePost() {
        // Implement delete logic (e.g., API call)
        console.log('Deleting post with ID:', this.post.id);
        // Redirect to home or post list after deleting
        this.$router.push('/');
      },
    },
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
    padding-top: 33%; /* This gives an approximate aspect ratio */
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
  </style>
  