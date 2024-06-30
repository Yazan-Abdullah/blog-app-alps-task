import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [
      { 
        id: 1, 
        title: 'The Great Gatsby', 
        content: 'A novel written by American author F. Scott Fitzgerald. It is set in the summer of 1922 in the fictional town of West Egg on prosperous Long Island.', 
        image: require('@/assets/images/image1.jpg'), 
        date: 'Wed Jun 10, 2020', 
        author: 'F. Scott Fitzgerald',
        timeSpent: '00:00:00'
      },
      { 
        id: 2, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image2.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee',
        timeSpent: '00:00:00'
      },
      { 
        id: 3, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image6.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee',
        timeSpent: '00:00:00'
      },
      { 
        id: 4, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image5.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee',
        timeSpent: '00:00:00'
      },
      { 
        id: 5, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image4.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee',
        timeSpent: '00:00:00'
      },
      { 
        id: 6, 
        title: 'To Kill a Mockingbird', 
        content: 'Harper Lee\'s Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.', 
        image: require('@/assets/images/image3.jpg'), 
        date: 'Fri Jul 11, 2020', 
        author: 'Harper Lee',
        timeSpent: '00:00:00'
      },
    ],
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    },
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
      }
    },
    updatePostTime(state, { id, timeSpent }) {
      const post = state.posts.find(post => post.id === id);
      if (post) {
        post.timeSpent = timeSpent;
      }
    }
  },
  actions: {
    addPost({ commit }, post) {
      commit('addPost', post);
    },
    deletePost({ commit }, postId) {
      commit('deletePost', postId);
    },
    updatePost({ commit }, updatedPost) {
      commit('updatePost', updatedPost);
    },
    updatePostTime({ commit }, payload) {
      commit('updatePostTime', payload);
    }
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id == id);
    },
    posts: (state) => {
      return state.posts;
    }
  }
});

export default store;
