<template>
  <div id="app">
    <PageHeader />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style>
/* Global styles for App.vue */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Add more global styles here */
</style>
