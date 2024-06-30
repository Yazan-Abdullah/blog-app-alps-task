<template>
  <div class="post-list">
    <ul>
      <li v-for="post in posts" :key="post.id" class="preview" @click="viewPost(post.id)">
        <figure class="preview__figure" :style="{ backgroundImage: `url(${post.image})` }">
          <figcaption class="preview__details">
            <div class="preview__title">
              {{ post.title }}
            </div>
            <div class="preview__meta">
              <time class="preview__published">{{ post.date }}</time>
              <a href="#" class="preview__author">{{ post.author }}</a>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: [
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
    ],
    };
  },
  methods: {
    viewPost(id) {
      this.$router.push({ name: 'PostDetail', params: { id: id } });
    },
    deletePost(id) {
      // Implement delete logic (e.g., API call or local storage)
      console.log('Deleting post with ID:', id);
      // Remove post from this.posts
      this.posts = this.posts.filter(post => post.id !== id);
    },
  },
};
</script>

<style scoped>
.post-list {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 0;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.preview {
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.preview__figure {
  position: relative;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.preview__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.preview__title {
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
}

.preview__meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 0.9rem;
}

.preview__published {
  margin-right: 10px;
}

.preview__author {
  color: #fff;
  text-decoration: none;
}

.preview__author:hover {
  text-decoration: underline;
}
</style>
