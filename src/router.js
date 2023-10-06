import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutMe from './components/AboutMe.vue';
import MyResume from './components/MyResume.vue';
import MyProjects from './components/MyProjects.vue'; 
import ContactUs from './components/ContactMe.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutMe },
  { path: '/resume', component: MyResume },
  { path: '/contact', component: ContactUs },
  { path: '/projects', component: MyProjects }, // Add a route for the ProjectsSection
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;