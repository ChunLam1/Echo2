<template>
  
    <form @submit.prevent="sendFile" enctype="multipart/form-data" class="flex">
      
    <div class="field">
        <div class="file is-boxed is-primary">
            <label class="file-label">
                <input 
                    type="file" 
                    ref="file" 
                    @change="selectFile" 
                    class="file-input"
                />
                 
                 <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                <span class="file-label">
                    Choose a file…
                </span>
                </span>
                <span v-if="file" class="file-name">
                    {{ file.name }}
                </span>
            </label>
        </div>
    </div>
    <div class="field">
  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
  <input type="text" id="name" v-model="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
</div>

    <div class="field">
      <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type:</label>
      <select id="type" v-model="selectedTypes"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style="width: 150px;">
        <option value="BASIC">BASIC</option>
        <option value="LOOP">LOOP</option>
        <option value="SAMPELE">SAMPLE</option>
        <option value="ONE-SHOT">ONE-SHOT</option>
        <!-- Add more types as needed -->
      </select>
    </div>

    <div class="field">
      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:</label>
      <select id="category" v-model="selectedCategories"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  style="width: 150px;">
        <option value="BASIC">BASIC</option>
        <option value="hip/hop">hip/hop</option>
        <option value="rap">rap</option>
        <option value="drumstep">drumstep</option>
        <option value="techno">techno</option>
        <option value="cinematic">cinematic</option>
        <option value="jazz">jazz</option>
        <option value="jungle">jungle</option>
        <!-- Add more categories as needed -->
      </select>
    </div>
    <div class="field">
        <button class="button is-info custom-button" @click="downloadFile">Send</button>
    </div>
    </form>
</template>

<script>
import axios from "axios";
import { saveAs } from 'file-saver';
export default {
    name: "SimpleUpload",
    data () {
        return {
            file: "",
            selectedTypes: "BASIC",
            selectedCategories: "BASIC",
            name: "", 
        }
    },

    methods: {
        selectFile () {
            this.file = this.$refs.file.files[0];
        },
        async sendFile () {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('name', this.name); // Append file name
      formData.append('type', this.selectedTypes); // Append type
      formData.append('category', this.selectedCategories); // Append categories
            console.log(formData)
            try {
                await axios.post('http://localhost:3000/upload', formData)
            } catch(err) {
                console.log(err);
            }

        },
        downloadFile() {
            const a = document.querySelector('.button.is-info');
            const data = "some data";

            const blob = new Blob([data], { type: 'text/plain' });

            const url = URL.createObjectURL(blob);
            console.log(url);

            a.href = url;
            a.download = 'data.txt';
        },
    }
}
</script>

<style scoped>
.file-label {
  display: flex;
  align-items: center;
}

.file-cta {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #4299e1; /* Change to your desired color */
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.file-cta:hover {
  background-color: #3182ce; /* Change to your desired hover color */
}

.file-icon {
  margin-right: 0.5rem;
}

.file-input {
  display: none;
}

.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}

.button.is-info {
  background-color: #4299e1; /* Change to your desired color */
  color: #fff;
  border-color: #4299e1; /* Change to your desired border color */
}

.button.is-info:hover {
  background-color: #3182ce; /* Change to your desired hover color */
  border-color: #3182ce; /* Change to your desired hover border color */
}
.field {
display: flex;
align-self: flex-end;
}
.custom-button {
  background-color: #4299e1; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  border-color: #4299e1; /* Couleur de la bordure */
  border-radius: 4px; /* Coins arrondis */
  padding: 10px 20px; /* Espacement intérieur */
  font-size: 16px; /* Taille de la police */
  cursor: pointer; /* Curseur au survol */
  transition: background-color 0.3s ease; /* Animation au survol */
}

.custom-button:hover {
  background-color: #3182ce; /* Couleur de fond au survol */
  border-color: #3182ce; /* Couleur de la bordure au survol */
}
label{
  display: flex;
  align-items: flex-end;
}
</style>

