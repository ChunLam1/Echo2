<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div v-if="message" :class="messageType">{{ message }}</div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input v-model="username" id="username" name="username" type="username" autocomplete="username" required=""
              class="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required=""
              class="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700">
              Remember me </label>
          </div>
          <div>
            <router-link class="font-medium leading-6 text-indigo-600 hover:text-indigo-500" to="/forgot-password">
              Forgot your password?
            </router-link>
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in</button>
        </div>
      </form>

      <div>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm leading-5">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a href="#"
                class="w-full flex justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <span class="sr-only">Sign in with Apple</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M10 3.333c2.623 0 4.74 2.117 4.74 4.74v3.334H13.33V10c0-.92-.746-1.667-1.667-1.667H10V6.667c0-.92-.746-1.667-1.667-1.667S6.667 5.747 6.667 6.667v1.666H5V8.073h1.667v6.667H5v1.667h1.667v3.334c0 .92.746 1.667 1.667 1.667h3.333v-3.334h-1.666v-1.667h1.666v-1.666c0-1.38 1.12-2.5 2.5-2.5h1.667V8.073h-1.667V6.667c0-2.623 2.117-4.74 4.74-4.74z">
                  </path>
                </svg>
              </a>
            </div>

            <div>
              <a href="#"
                class="w-full flex justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <span class="sr-only">Sign in with Facebook</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M10 3.333c2.623 0 4.74 2.117 4.74 4.74v3.334H13.33V10c0-.92-.746-1.667-1.667-1.667H10V6.667c0-.92-.746-1.667-1.667-1.667S6.667 5.747 6.667 6.667v1.666H5V8.073h1.667v6.667H5v1.667h1.667v3.334c0 .92.746 1.667 1.667 1.667h3.333v-3.334h-1.666v-1.667h1.666v-1.666c0-1.38 1.12-2.5 2.5-2.5h1.667V8.073h-1.667V6.667c0-2.623 2.117-4.74 4.74-4.74z">
                  </path>
                </svg>
              </a>
            </div>

            <div>
              <a href="#"
                class="w-full flex justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <span class="sr-only">Sign in with Goolge</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M10 3.333c2.623 0 4.74 2.117 4.74 4.74v3.334H13.33V10c0-.92-.746-1.667-1.667-1.667H10V6.667c0-.92-.746-1.667-1.667-1.667S6.667 5.747 6.667 6.667v1.666H5V8.073h1.667v6.667H5v1.667h1.667v3.334c0 .92.746 1.667 1.667 1.667h3.333v-3.334h-1.666v-1.667h1.666v-1.666c0-1.38 1.12-2.5 2.5-2.5h1.667V8.073h-1.667V6.667c0-2.623 2.117-4.74 4.74-4.74z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member ?
        <router-link class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/Signup">Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async handleLogin() {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/auth/signin', {
        username: this.username,
        password: this.password,
      });
      console.log(response);
      // this.message = response.data.message;
      // Traitez la réponse du serveur, par exemple, stockez le token si l'authentification est réussie
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('id', response.data.id);
      this.$store.commit('setIsLogged', true);
      this.$router.push('/');

    } catch (error) {
      console.error('Erreur lors  de la connexion :', error.response.data);
      this.message = error.response.data.message;
      this.messageType = 'text-red-500';

    }
  }
  }
};
</script>

<style scoped>
</style>