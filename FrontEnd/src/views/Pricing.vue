<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div>
      <div v-if="isMonthly">{{ monthlyPrice }}</div>
      <div v-else>{{ annualPrice }}</div>
    </div>

    <!-- Monthly/Annually -->
    <div class="py-8 px-4 inline-flex rounded-md shadow-sm">
      <button
        class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="toggleBillingCycle(true)" :class="{ 'active': isMonthly }">
        Monthly
      </button>
      <button
        class="px-6 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="toggleBillingCycle(false)" :class="{ 'active': !isMonthly }">
        Annually
      </button>
    </div>

    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      <!-- Pricing Card -->
      <div v-for="plan in plans" :key="plan.id"
        class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 class="mb-4 text-2xl font-semibold">{{ plan.name }}</h3>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{ plan.description }}</p>
        <div class="flex justify-center items-baseline my-8 border-y-indigo-500">
          <span :id="`monthly-price-${plan.id}`" class="mr-2 text-5xl font-extrabold">{{ isMonthly ? plan.monthlyPrice :
            plan.annualPrice }}</span>
          <span :id="`per-${plan.id}`" class="text-gray-500 dark:text-gray-400">{{ isMonthly ? '/month' : '/year'
          }}</span>
        </div>
        <!-- List -->
        <ul role="list" class="mb-8 space-y-4 text-left">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center space-x-3">
            <!-- Icon -->
            <div
              v-if="(feature === 'Beatmaker drum machine plugin' || feature === 'Astra synth plugin') && (plan.id) === 'starter'">
              <svg width="20px" height="20px" viewBox="0 0 25.00 25.00" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#ff0000" stroke="#ff0000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                  stroke-width="0.05"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>cross</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs> </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)"
                      fill="#ff0000">
                      <path
                        d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                        id="cross" sketch:type="MSShapeGroup"> </path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div v-else="">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>{{ feature }}</span>
          </li>
        </ul>
          <button @click="subscription(isMonthly ? plan.apiparams : plan.apiparams2)" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">I want this one</button>
      </div>
    </div>
  </div>
</template>


<script>
import { loadStripe } from '@stripe/stripe-js'
export default {
  data() {
    return {
      isMonthly: true,
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          description: 'Best option for personal use & for your next project.',
          monthlyPrice: '$9.99',
          annualPrice: '$99.99',
          apiparams: 'mensual-starter',
          apiparams2: 'anual-starter',
          features: [
            '100 monthly credits',
            'Desktop and mobile apps',
            'Preview sounds in your DAW with Bridge',
            'Beatmaker drum machine plugin',
            'Astra synth plugin'
          ]
        },
        {
          id: 'company',
          name: 'Company',
          description: 'Relevant for multiple users, extended & premium support.',
          monthlyPrice: '$17.99',
          annualPrice: '$179.99',
          apiparams: 'mensual-company',
          apiparams2: 'anual-company',
          features: [
            '200 monthly credits',
            'Desktop and mobile apps',
            'Preview sounds in your DAW with Bridge',
            'Beatmaker drum machine plugin',
            'Astra synth plugin'
          ]
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          description: 'Best for large scale uses and extended redistribution rights.',
          monthlyPrice: '$34.99',
          annualPrice: '$349.99',
          apiparams: 'mensual-premium',
          apiparams2: 'anual-premium',
          features: [
            '500 monthly credits',
            'Desktop and mobile apps',
            'Preview sounds in your DAW with Bridge',
            'Beatmaker drum machine plugin',
            'Astra synth plugin'
          ]
        }
      ]
    };
  },
  methods: {
    toggleBillingCycle(isMonthly) {
      this.isMonthly = isMonthly;
    },
    async subscription(typeoffee){
      const stripe = await loadStripe(
        "pk_test_51NUrTMB8CzYf9fdmszXbL2jxbEeGay7bUE7LPKuKMkzRqaiUISmxgtmdasdIYKI5Z2EndtYlHxV7Wl0LYwiep4gk00RNoJY3Sh"
      );
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        `http://localhost:3000/api/${typeoffee}`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(),
        }
      );
        
      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    }
  }
};
</script>
