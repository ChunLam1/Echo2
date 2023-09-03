<template>
  <HeaderMain />
  <!-- <div class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"> -->
  <div class="flex min-h-screen flex-1 flex-col justify-center">

    <router-view></router-view>
  </div>
  <!-- <button @click="userinfo">test</button> -->
  <Footer />
  <!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MusicFooter from './components/MusicFooter.vue'
import SearchBaree from './components/SearchBar.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <Upload/>
      <Sounds msg = "I did it!"/>
  </main>
  <footer>
      <MusicFooter />
  </footer> -->
</template>


<script>
import HeaderMain from './components/HeaderMain.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    HeaderMain,
  },
  data() {
    return {
      isLogged: false,
      id: localStorage.getItem('id'),
    }
  },
  created() {
    this.userinfo();
    // Vérifier si le token existe dans le localStorage
    if (localStorage.getItem('token')) {
      this.isLogged = true; // Mettre à jour la valeur de isLogged si le token existe
      console.log('token');
    } else {
      console.log('no token');
      this.isLogged = false; // Mettre à jour la valeur de isLogged si le token n'existe pas
    }
  },
  methods: {
    async userinfo() {
      try {
        const userId = localStorage.getItem('id');
        const response = await axios.get(`http://127.0.0.1:3000/api/auth/${userId}`);
        console.log("tototo", response.data);
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
      }
    }
  }
};
</script>
<script setup>
import { onMounted } from 'vue'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
})
</script>
