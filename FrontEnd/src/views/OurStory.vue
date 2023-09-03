<template>
    <div class="about-page">
      <section class="about-header bg-gray-900 text-white py-16 container1">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 title1">Discover Our Story</h1>
          <p class="text-lg mb-8">
            Elevating music creation through innovation and collaboration.
          </p>
          <video class="w-full h-300 max-w-full mx-auto rounded-lg shadow-lg"  autoplay muted loop >
    <source src="../assets/test2.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
        </div>
      </section>
  
      <section class="about-content bg-white text-gray-800 py-12">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold mb-6">Our Journey</h2>
          <p class="mb-6">
            Our journey began with a passion for music and a vision to empower
            artists worldwide. By blending technology, creativity, and community,
            we've created a platform that inspires musicians of all levels to
            bring their ideas to life.
          </p>
  
          <h2 class="text-2xl font-semibold mb-6">Innovation at the Core</h2>
          <p class="mb-6">
            Innovation is at the core of everything we do. We're constantly
            pushing boundaries to provide you with cutting-edge tools and
            resources. From AI-powered suggestions to real-time collaboration,
            we're committed to fueling your creative process.
          </p>
  
          <h2 class="text-2xl font-semibold mb-6">Join Our Movement</h2>
          <p class="mb-6">
            We invite you to join our movement of music enthusiasts and creators.
            Dive into a world of unlimited possibilities, where your imagination
            is the only limit. Together, let's redefine the future of music.
          </p>
  
          <p class="mb-6">
            Whether you're a producer, musician, or sound designer, our platform
            provides the resources you need to elevate your craft. Unleash your
            creativity with a diverse range of samples, collaborate seamlessly,
            and make your mark on the world of music.
          </p>
  
          <p class="mb-6">
            Our commitment to innovation goes beyond tools. It's about fostering
            a community where artists can thrive, learn from one another, and
            create together. With a global network of creators, you're never
            alone on your journey.
          </p>
  
          <img
            src="https://f.maformation.fr/edito/sites/3/2021/12/producteur-musique.jpeg"
            alt="Community"
            class="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  /* Styles restent inchangés */
  /* .container1{
    background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
  
  } */
  .title1{
    background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  </style>
  