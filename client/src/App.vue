<template>
  <div class="app">
    <Navigation />
    <!--
      crude method of spacing the nav and content
      however it better for code readability
      (better than css or vuetify class css)
    -->
    <br> <br> <br> <br>
    <RouterView />
  </div>
  <div  >
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
  }
};
</script>

<style>
h1 {
  color: white;
  font-weight: bold;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  /* backdrop-filter: blur(30px); */
  /* border-radius: 10px; */

}
.app {
  /* background generated with shutterstock AI :D */
  background-image: url(@/assets/bg.jpg.jpg);
  background-size: cover;
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
