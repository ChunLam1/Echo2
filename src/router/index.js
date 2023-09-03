import { createRouter, createWebHistory } from "vue-router";


import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/404.vue";
import StripePayment from "@/views/StripePayment.vue";
import Success from "@/views/Success.vue";
import Cancel from "@/views/Cancel.vue";
import Pricing from "@/views/Pricing.vue";
import ConfirmEmailComponent from '@/views/ConfirmEmailComponent.vue';
import Sounds from '@/views/Sounds.vue';
import Profile from '@/views/Profile.vue';
import OurStory from '@/views/OurStory.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Signup",
    },
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Page not found",
    },
  },
  {
    path: "/Cashout",
    name: "Cashout",
    component: StripePayment,
    meta: {
      title: "Stripe Payment",
    },
  },
  {
    path: "/Pricing",
    name: "Pricing",
    component: Pricing,
    meta: {
      title: "Pricing",
    },
  },
  {
    path: "/Success",
    name: "Success",
    component: Success,
    meta: {
      title: "Thank you for your purchase!",
    },
  },
  {
    path: "/Cancel",
    name: "Cancel",
    component: Cancel,
    meta: {
      title: "Payment cancelled",
    },
  },
  {
    path: '/confirm-email/:id',
    name: 'ConfirmEmail',
    component: ConfirmEmailComponent,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/Sounds',
    name: 'Sounds',
    component: Sounds,
    meta: {
      title: 'Sounds'
    }
  },
  {
    path: '/OurStory',
    name: 'OurStory',
    component: OurStory,
    meta: {
      title: 'Our Story'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Echo | ${to.meta.title}`;
  next();
});

export default router;
