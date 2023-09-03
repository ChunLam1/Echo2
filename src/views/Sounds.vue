<template>
  
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div class="uploadcontainer"> 
      
      <Upload />
    </div>
    <div class="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <img 
          :src="imageLinks[currentImageIndex]"
          class="object-cover totoo"/>
        <div
          class="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
          <h3 class="font-bold">{{ current.title }}</h3>
          <span class="opacity-70">{{ current.artist }}</span>
        </div>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" v-model="showTypeFilter" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Filter</span>
    </label>
      <!-- Dropdown list to select filter type -->
      <div v-if="showTypeFilter">
      <div class="p-4">
        <label for="filterType" class="block text-gray-700 text-sm font-bold mb-2">Filter by Type:</label>
        <select id="filterType" @change="handleFilterChange" v-model="selectedFilterType" class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="">All</option>
          <option value="BASIC">BASIC</option>
          <option value="SAMPLE">SAMPLE</option>
          <option value="LOOP">LOOP</option>
          <option value="ONE-SHOT">ONE-SHOT</option>
          <!-- Add more options for different types -->
        </select>
      </div>
      <!-- Button to apply the filter -->
      <div class="px-4 pb-4">
        <button @click="filteredSongs" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply Filter</button>
      </div>
    </div>
      
      <div v-else>
      <div class="p-4">
        <label for="filterType" class="block text-gray-700 text-sm font-bold mb-2">Filter by Category:</label>
        <select id="filterType" @change="handleFilterChange" v-model="selectedFilterCategory" class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="">All</option>
        <option value="BASIC">BASIC</option>
        <option value="hip/hop">hip/hop</option>
        <option value="rap">rap</option>
        <option value="drumstep">drumstep</option>
        <option value="techno">techno</option>
        <option value="cinematic">cinematic</option>
        <option value="jazz">jazz</option>
        <option value="jungle">jungle</option>
          <!-- Add more options for different types -->
        </select>
      </div>
      <!-- Button to apply the filter -->
      <div class="px-4 pb-4">
        <button @click="filteredSongs2" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply Filter</button>
      </div>
      </div> 
      <div class="relative h-1 bg-gray-200">
        <div class="absolute h-full bg-green-500 flex items-center justify-end" :style="{ width: progressPercentage }">
          <div class="rounded-full w-3 h-3 bg-white shadow"></div>
        </div>
      </div>
      <div class="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">

        <div>
          {{ formatTime(elapsedTime) }}
        </div>

        <div class="flex space-x-3 p-2">
          <button class="focus:outline-none" @click="prev">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>

          <button
            class="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none"
            v-if="!isPlaying" @click="play">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>

          <button
            class="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none"
            v-else @click="pause">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>

          <button class="focus:outline-none" @click="next">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>

        <div>
          {{ formatTime(remainingTime) }}
        </div>
      </div>
      <ul class="text-xs sm:text-base divide-y border-t cursor-default">
        <li v-for="(song, index) in songs" :key="index" class="flex items-center space-x-3 hover:bg-gray-100">

          <button class="p-3 hover:bg-green-500 group focus:outline-none" @click="play(song)">
            <svg class="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>

          <div class="flex-1">
            {{ song.title }} - {{ song.artist }}
          </div>

          <div class="text-xs text-gray-400">
            {{ formatTime(song.duration) }}
          </div>
          <div>
          <Download :song="song" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

import Axios from 'axios';
import Download from '../components/Download.vue';
import Upload from '../components/Upload.vue';
// import Filter from '../components/Filter.vue';

export default {
  components: { Download, Upload },
  data() {
    return {
      elapsedTime: 0,
      totalDuration: 0,
      remainingTime: 0,
      updateRemainingTimeInterval: null,
      current: {
        title: "Song Title",
      },
      songs: [
      ],
      filteredSong: [], // Add this line
      player: new Audio(),
      isPlaying: false,
      selectedFilterType: '', // Initial value
      selectedFilterCategory: '', // Initial value
      showTypeFilter: true, // Initial value
      imageLinks: [
      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80",
      "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4709825/pexels-photo-4709825.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2489986/pexels-photo-2489986.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/706142/pexels-photo-706142.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2403054/pexels-photo-2403054.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4033340/pexels-photo-4033340.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/10049264/pexels-photo-10049264.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    currentImageIndex: 0, // Pour suivre l'index de l'image actuelle
  }
  },

  methods: {
    toggleFilter() {
      // Toggle between type and category filters
      this.showTypeFilter = !this.showTypeFilter;
    },
    changeRandomImage () {
    const randomIndex = Math.floor(Math.random() * this.imageLinks.length);
    this.currentImageIndex = randomIndex;
  },
    handleFilterChange() {
    // Log de la valeur actuelle de selectedFilterType à chaque changement
    console.log(this.selectedFilterType);
    
    // Vous pouvez également ajouter ici le code pour appliquer le filtre ou effectuer d'autres opérations en fonction de la nouvelle valeur.
  },
    play(song) {
      if (typeof song.src !== "undefined") {
        console.log("err",song);
        this.current = song;
        this.player.src = this.current.src;
      }
      this.changeRandomImage();
      this.index = this.songs.indexOf(this.current);
      this.player.play();
      this.isPlaying = true;
      this.totalDuration = Math.floor(this.player.duration);
      this.remainingTime = this.totalDuration - this.elapsedTime;
      this.player.addEventListener('timeupdate', () => { this.elapsedTime = Math.floor(this.player.currentTime); })
      this.updateElapsedTimeInterval = setInterval(() => {
        this.elapsedTime = Math.floor(this.player.currentTime);
        this.remainingTime = this.totalDuration - this.elapsedTime;
      }, 100);
    },

    pause() {
      this.player.pause();
      this.isPlaying = false;
      clearInterval(this.updateElapsedTimeInterval);
    },

    next() {
    this.index = 0;
    // this.current = this.songs[this.index];
    // this.player.src = this.current.src;
    console.log("LALALA")
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
      clearInterval(this.updateElapsedTimeInterval);
    },
    
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
      clearInterval(this.updateElapsedTimeInterval);
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    },

  filteredSongs() {
    let apiUrl = this.selectedFilterType !== ""
      ? `http://localhost:3000/files/filter?type=${this.selectedFilterType}`
      : `http://localhost:3000/files/`;

    Axios.get(apiUrl)
      .then((response) => {
        console.log("BOBOBO", response);
        // Assuming the API response contains an array of songs
        // Modify the response data structure as needed
        this.songs = response.data;
        // this.filteredSongs = this.songs; // Update filtered songs

        // Check if there are songs available
        if (this.songs.length > 0) {
          // Set the first song as the current song and initialize the audio player
          this.current = this.songs[this.index];
          this.player.src = this.current.src;
        } else {
          // Handle the case where no songs are available
          // You can show a message or take appropriate action
        }
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
    this.index = 0;
  },
  filteredSongs2() {
    let apiUrl = this.selectedFilterCategory !== ""
      ? `http://localhost:3000/files/filter2?category=${this.selectedFilterCategory}`
      : `http://localhost:3000/files/`;

    Axios.get(apiUrl)
      .then((response) => {
        console.log("BOBOBO", response);
        // Assuming the API response contains an array of songs
        // Modify the response data structure as needed
        this.songs = response.data;
        // this.filteredSongs = this.songs; // Update filtered songs

        // Check if there are songs available
        if (this.songs.length > 0) {
          // Set the first song as the current song and initialize the audio player
          this.current = this.songs[this.index];
          this.player.src = this.current.src;
        } else {
          // Handle the case where no songs are available
          // You can show a message or take appropriate action
        }
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
    this.index = 0;
  },
  },


  created() {
    Axios.get(`http://localhost:3000/files/`)
      .then((response) => {
        // Assuming the API response contains an array of songs
        // Modify the response data structure as needed
        this.songs = response.data;
        this.filteredSong = songs;
        // Set the first song as the current song and initialize the audio player
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
    this.index = 0;
    // this.current = this.songs[this.index];
    // this.player.src = this.current.src;
  },

  computed: {
    progressPercentage() {
      if (this.totalDuration === 0) {
        return '0%'; // To prevent division by zero
      }
      return `${(this.elapsedTime / this.totalDuration) * 100}%`;
    },
  },

}
</script>

<style scoped>
.uploadcontainer {
  margin-top: 100px;
}
.totoo{
  height: 250px;
  width: 800px;
}
</style>