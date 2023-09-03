<template>
  <Disclosure as="nav"
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img class="block h-8 w-auto lg:hidden"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/818606114124305.60354e9639250.jpg"
                alt="Your Company" />
              <img class="hidden h-8 w-auto lg:block"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/818606114124305.60354e9639250.jpg"
                alt="Your Company" />
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->

              <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 navbtn hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button> -->

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <div v-if="isLogged">
                <MenuButton
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <!-- <img class="h-8 w-8 rounded-full"
                    src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
                    alt="" /> -->
                    <img
                    v-if="profilePicture"
                    class="h-8 w-8 rounded-full"
                    :src="profilePicture"
                    alt="User Profile"
                  />
                  <img v-else class="h-8 w-8 rounded-full"
                    src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
                    alt="" />
                </MenuButton>
              </div>
              <div v-else>
                <router-link v-for="item in notLogged" :key="item.name" :to="item.href"
                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white navbtn', 'rounded-md px-3 py-2 text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
              </div>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                <a href="/Profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                  Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="/" @click="logout"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
                <!-- <MenuItem v-slot="{ active }">
                  <router-link to="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</router-link>
                </MenuItem> -->
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white navbtn', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
// import { mapState } from 'vuex';
import { useStore } from "vuex";
import { computed } from 'vue';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/About', current: false },
  { name: 'Pricing', href: '/Pricing', current: false },
  { name: 'Sounds', href: '/Sounds', current: false },
  { name:'Our Story', href:'/OurStory', current:false},
]
const notLogged = [
  { name: 'Signup', href: '/Signup', current: false },
  { name: 'Login', href: '/Login', current: false },
]

// const { isLogged } = mapState(['isLogged']);
const store = useStore();
const isLogged = computed(() => store.state.isLogged);
</script>

<script>
// import { useStore } from "vuex";
// import { computed } from 'vue';
import store from '../store';
import axios from 'axios';
// const store = useStore();
// const isLogged = computed(() => store.state.isLogged);
export default {
  data() {
    return {
      profilePicture: null, // Initialize with null or a default image URL
    };
  },
  created() {
    this.userinfo();
  },
  methods: {
    logout() {
      // Appel de la mutation "logout" pour déconnecter l'utilisateur
      // this.$store.commit('logout');
      store.commit('setIsLogged', false);
      localStorage.clear();
    },
  async userinfo() {
    try {
      const userId = localStorage.getItem('id');
      const response = await axios.get(`http://127.0.0.1:3000/api/auth/${userId}`);
      console.log("tototo", response.data);
      this.profilePicture = response.data.profilePicture;
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
    }
  },
};
</script>
 <style scoped>
 /* .navbtn:hover{
   background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
 } */

 .navbtn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  margin: 0 10px;
  padding-bottom: 5px;
  background-image: linear-gradient(45deg, rgb(202, 193, 197), rgb(88, 88, 155));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: color 0.3s;
}

.navbtn::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #5b29c1;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s;
}

.navbtn:hover {
  background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;}

.navbtn:hover::before {
  transform: scaleX(1);
}

</style>