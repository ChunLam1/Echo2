<template>
  <div id="app">
    <div class="h-screen flex flex-col">
      <div
        class="bg-cover bg-center h-full flex items-center justify-between HomeBg"
      >
        <!-- <div class="w-1/2 p-8 flex flex-col justify-center"> -->
        <div class="leftCompo">
          <h1 class="text-7xl font-bold mb-4">
            <span class="gradient-text">Lorem Ipsum</span>
          </h1>
          <p class="text-2xl mb-4 text-white">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <router-link to="/about">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              En savoir plus
            </button>
          </router-link>
        </div>
        <div class="w-1/2">
          <img
            class="img3D"
            src="https://bestanimations.com/media/spheres/1459907060sphere-computer-effects-art-3d-geometry-gif-17.gif"
            alt="toto"
          />
        </div>
      </div>
    </div>

    <div class="flex h-screen Bg2">
      <div class="w-1/2">
        <img src="@/assets/casque.webp" alt="Image" class="Bg2Img" />
      </div>
      <div class="w-1/2 p-8 flex flex-col justify-center">
        <h1 class="text-7xl font-bold mb-4 h1color">Titre</h1>
        <p class="text-2xl mb-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          cursus elit, eu auctor libero.
        </p>
      </div>
    </div>

    <div class="h-screen flex flex-col relative">
      <div
        class="bg-cover bg-center h-full flex items-center justify-between HomeBg"
      >
        <!-- <div class="w-1/2 p-8 flex flex-col justify-center"> -->
        <div class="leftCompo">
          <h1 class="text-7xl font-bold mb-4">
            <span class="gradient-text">Lorem Ipsum</span>
          </h1>
          <p class="text-2xl mb-4 text-white">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            En savoir plus
          </button>
        </div>
        <div class="w-1/2 absolute bottom-0 right-40">
          <img class="img3Dbis" src="@/assets/beatmaking.png" alt="toto" />
        </div>
      </div>
    </div>

    <!-- <HeaderMain /> -->
    <div class="flex h-screen">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-0 sm:pt-36 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="post in posts"
            :key="post.id"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{
                post.date
              }}</time>
              <a
                :href="post.category.href"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >{{ post.category.title }}</a
              >
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                :src="post.author.imageUrl"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="h-screen">
    <div
      class="bg-cover bg-center h-full flex items-center justify-between pt-20"
      :style="`background-image: url(${backgroundImageURL}); background-size: 85%`"
    >
      <div class="CalltoAction">
        <h1 class="text-7xl font-bold mb-4 text-gray-100">Try Echo Today</h1>
        <router-link to="/Pricing">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Start now
          </button>
        </router-link>
        <!-- Le contenu de votre div ici -->
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Nicolo",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "src/assets/nicolas1.tran.jpg",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Le BOSS Chun",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "src/assets/chun-sing-nicolas.lam@epitech.eu.jpg",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Monsieur KenFack",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "src/assets/igor-rayand.kenfack-tsafack@epitech.eu.jpg",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Monsieur Didou",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "src/assets/dillan.addouche@epitech.eu.jpg",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Florito",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "src/assets/florian.autour@epitech.eu.jpg",
    },
  },
];
</script>

<script>
import { onMounted } from "vue";
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
  initTooltips,
} from "flowbite";

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
});
export default {
  data() {
    return {
      backgroundImageURL:
        "src/assets/istockphoto-1388569759-2048x2048-transformed-transformed.jpeg", // Remplacez par le chemin de votre image
    };
  },
};
</script>

<style scoped>
.gradient-text {
  background-color: #421d8d;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.leftCompo {
  width: 50%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.leftCompo button {
  width: 200px;
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid #5b29c1;
}

.leftCompo button:hover {
  background-color: #5b29c1;
  color: white;
}
.HomeBg {
  background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
}
.img3D {
  margin-left: 120px;
  width: 500px;
}
.img3Dbis {
  margin-left: 120px;
  width: 800px;
}
.Bg2 {
  background-color: rgb(34, 34, 45);
}
.Bg2Img {
  padding: 150px;
  margin-top: 70px;
}
.h1color {
  color: white;
}
.CalltoAction {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 32%;
  margin-bottom: 10%;
}
.CalltoAction button {
  width: 200px;
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid #5b29c1;
}
.CalltoAction button:hover {
  background-color: #5b29c1;
  color: white;
}
</style>
