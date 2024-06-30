export const store = {
    posts: [
      { 
        id: 1, 
        title: 'The Great Gatsby', 
        content: 'A novel written by American author F. Scott Fitzgerald. It is set in the summer of 1922 in the fictional town of West Egg on prosperous Long Island.', 
        image: require('@/assets/images/image1.jpg'), 
        date: 'Wed Jun 10, 2020', 
        author: 'F. Scott Fitzgerald' 
      },
      { 
        id: 2, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image2.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
      { 
        id: 3, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image6.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
      { 
        id: 4, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image5.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
      { 
        id: 5, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image4.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
      { 
        id: 6, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image3.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee' 
      },
    ],
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts.splice(index, 1, updatedPost);
      }
    }
  };
  