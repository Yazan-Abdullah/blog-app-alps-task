import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/BlogHome.vue';
import AddPost from '../components/AddPost.vue';
import EditPost from '../components/EditPost.vue';
import PostDetail from '@/components/PostDetail.vue';

const routes = [
  { path: '/',name: 'Home', component: Home },
  { path: '/add-post',name: 'AddPost', component: AddPost },
  { path: '/edit-post/:id', name: 'EditPost',component: EditPost, props: true },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
export default router;
