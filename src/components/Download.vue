<template>

    <button class="focus:outline-none pr-4 group" @click="handleGetRequest">
            <svg class="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
            </svg>
          </button>
</template>

<script>
import axios from "axios";
import { saveAs } from 'file-saver';
export default {
    props: {
        song: Object,
    },

    methods: {
        handleGetRequest() {
      // Replace 'your_url_here' with the actual API endpoint or URL you want to request
      axios
        .get(`http://localhost:3000/files/${this.song.title}`, { responseType: 'blob' })
        .then((response) => {
          // Handle the response data here (e.g., save it or use it in your application)
          const fileName = this.song.title; // Replace with the desired file name
          saveAs(new Blob([response.data]), fileName);
          console.log('Response data:', response.data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        });
    },
    }
}
</script>