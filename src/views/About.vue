<template>
  <div class="">
    <h1 class="title">Your hub for buying and selling beats</h1>
    <div class="container1">
      <div class="leftContainer1">
        <p>
          Explore Echo Beats, a vibrant marketplace where you can buy, sell, and
          trade impactful beats, empowering music producers, content creators,
          and youtubers alike
        </p>
        <router-link to="/Sounds">
        <button class="btn1">Explore</button>
        </router-link>
      </div>
      <div class="rightContainer1">
        <img
          src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHwyMXx8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=85"
          alt="img"
          style="width: 600px; height: 500px"
        />
      </div>
    </div>
  </div>
  <div class="testimonials-container custom-bg">
    <h1 class="testimonials-title">Testimonials</h1>
    <div class="testimonial-cards">
      <!-- Testimonial Card 1 -->
      <div class="testimonial-card">
        <div class="stars-rating">★★★★★</div>
        <p>
          Echo, the heartbeat of Paris, offers an innovative platform for
          selling and buying the finest beats, revamping the rhythm of content
          creation
        </p>
        <p>Claire Dubois</p>
      </div>
      
      <!-- Testimonial Card 2 -->
      <div class="testimonial-card">
        <div class="stars-rating">★★★★★</div>
        <p>
          Echo, Paris' top-notch hub for unique beats, providing the perfect
          platform for creators and music producers to buy, sell and scintillate
          with fresh rhythms
        </p>
        <p>Pierre Dupont</p>
      </div>
      
      <!-- Testimonial Card 3 -->
      <div class="testimonial-card">
        <div class="stars-rating">★★★★★</div>
        <p>
          Echo, Paris' finest haven for beats; a seamless platform to buy, sell, and explore unique soundscapes suited for music producers, content creators and more
        </p>
        <p>Marie Dupont</p>
      </div>
    </div>
  </div>

  <div class="FeaturesContainer">
    <h1 class="FeaturesTitle">Features</h1>
    <div class="features-cards">
      <!-- Card 1 -->
      <div class="features-card">
        <img src="https://images.unsplash.com/photo-1433622070098-754fdf81c929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNelYXJjaHwyMnx8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beat Marketplace" class="rounded-image" />
        <p>Beat Marketplace</p>
      </div>
      
      <!-- Card 2 -->
      <div class="features-card">
        <img src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNelYXJjaHwyM3x8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beat Trading Hub" class="rounded-image" />
        <p>Beat Trading Hub</p>
      </div>
      
      <!-- Card 3 -->
      <div class="features-card">
        <img src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNelYXJjaHwyNHx8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beat Marketplace Platform" class="rounded-image" />
        <p>Beat Marketplace Platform</p>
      </div>
    </div>
  </div>

  <div class="custom-bg2">
    <h1 class="marketTitle">Premier stop for selling and buying beats</h1>
    <div class="marketContainer">
      <div class="marketContainer1Left">
        <p>Echo, located in the heart of Paris, is your ultimate online hub for buying and selling unique beats with a global reach. We amplify your creativity by providing a platform for music producers, content creators and YouTubers to explore distinctive beats. Join Echo, where beats meet their perfect match in melody</p>
        <router-link to="/Sounds">
        <button>Best Market place</button>
        </router-link>
      </div>
      <div class="marketContainer1Right">
        <img src="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHwyNXx8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beat Marketplace"  />
      </div>  
    </div>
  </div>
   <div>
    <h1 class="marketTitle">Echo Contact Support</h1>
    <div class="ContactContainer">
      <div class="ContactLeft">
        <div class="centrer-content">
          <p>Get in touch through our Echo contact form and become a maestro in your musical journey</p>
          <form>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" required />
            <label for="email">Email</label>
            <input type="email" id="email" required />
            <label for="comment">Leave a Comment</label>
            <textarea id="comment" required></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
      <div class="ContactRight">
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk5MjB8MHwxfHNlYXJjaHwyNnx8TXVzaWN8ZW58MHx8fHwxNjkzNjM1MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="img" />
      </div>
    </div>
  </div>
  </template>

<script></script>

<style scoped>
/* Style pour la forme */
.title {
  font-size: 5rem; /* Taille de police très grosse */
  font-family: "Arial Rounded MT Bold", sans-serif; /* Police d'écriture arrondie */
  background-image: linear-gradient(45deg, rgb(202, 193, 197), #5b29c1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center; /* Centrer le texte */
  padding-top: 40px; /* Espacement du haut */
}

/* Styles pour le contenu principal */
.container1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px; /* Espacement intérieur du conteneur */
}

.leftContainer1 {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour le paragraphe */
.leftContainer1 p {
  font-size: 1.2rem; /* Taille de police du paragraphe */
  color: #333; /* Couleur du texte du paragraphe */
}

/* Style pour le bouton "Explore" */
.btn1 {
  background-color: #f36f6f; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
  padding: 10px 20px; /* Espacement intérieur du bouton */
  border: none; /* Supprimer la bordure */
  border-radius: 5px; /* Coins arrondis */
  font-size: 1rem; /* Taille de police du bouton */
  cursor: pointer;
  margin: 20px 0;
}

.rightContainer1 {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Le reste de vos styles pour le contenu reste inchangé */
/* Styles pour les testimonial cards */
.testimonials-title {
  font-size: 2.5rem; /* Augmente la taille de police du titre */
  text-align: center;
  margin-bottom: 20px; /* Espacement en bas du titre */
}
.testimonials-container {
  text-align: center;
}

.testimonial-cards {
  display: flex;
  justify-content: center; /* Centre les cartes horizontalement */
  margin-top: 20px;
}

.testimonial-card {
  flex: 0 0 30%; /* Prend 30% de la largeur, sans redimensionnement */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 25px; /* Espace entre les cartes */
  text-align: left;
}

/* Styles pour les étoiles de notation */
.stars-rating {
  font-size: 20px;
  color: gold;
  margin-bottom: 10px;
}

/* Styles pour le texte du témoignage */
.testimonial-card p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
}

/* Styles pour le nom de l'auteur */
.testimonial-card p:last-child {
  font-weight: bold;
}
/* Styles pour les cartes de fonctionnalités */
.FeaturesContainer {
  text-align: center;
  margin-bottom: 60px;
}

.FeaturesTitle {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.features-cards {
  display: flex; /* Utilisation de Flexbox */
  justify-content: space-between; /* Alignement horizontal */
  align-items: center; /* Centre les cartes verticalement */
  margin-top: 20px;
}

.features-card {
  flex: 0 0 calc(30% - 20px); /* Prend 30% de la largeur, avec espacement entre les cartes */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 25px; /* Espace entre les cartes */

  text-align: center;
}

/* Style pour les images arrondies */
.rounded-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto 10px;
}

/* Style pour le texte en bas */
.features-card p {
  font-size: 16px;
  font-weight: bold;
}
.marketTitle {
  font-size: 2rem; /* Taille de police assez grosse */
  font-family: "Arial Rounded MT Bold", sans-serif; /* Police d'écriture arrondie */
  text-align: center; /* Centrer le texte */
  padding-top: 40px; /* Espacement du haut */
}

/* Styles pour le contenu principal */
.marketContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px; /* Espacement intérieur du conteneur */
}

.marketContainer1Left {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour le paragraphe */
.marketContainer1Left p {
  font-size: 1.2rem; /* Taille de police du paragraphe */
  color: #333; /* Couleur du texte du paragraphe */
}

/* Style pour le bouton "Best Market place" */
.marketContainer1Left button {
  background-color: #f36f6f; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
  padding: 10px 20px; /* Espacement intérieur du bouton */
  border: none; /* Supprimer la bordure */
  border-radius: 5px; /* Coins arrondis */
  font-size: 1rem; /* Taille de police du bouton */
  cursor: pointer;
  margin: 20px 0;
}

.marketContainer1Right {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour l'image */
.marketContainer1Right img {
  width: 100%; /* 100% de la largeur du conteneur */
  height: auto; /* Hauteur automatique pour conserver les proportions de l'image */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
}

.marketTitle {
  font-size: 2rem; /* Taille de police assez grosse */
  font-family: "Arial Rounded MT Bold", sans-serif; /* Police d'écriture arrondie */
  text-align: center; /* Centrer le texte */
  padding-top: 40px; /* Espacement du haut */
}

/* Styles pour le contenu principal */
.marketContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px; /* Espacement intérieur du conteneur */
}

.marketContainer1Left {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour le paragraphe */
.marketContainer1Left p {
  font-size: 1.2rem; /* Taille de police du paragraphe */
  color: #333; /* Couleur du texte du paragraphe */
  margin-bottom: 20px; /* Espacement en bas du paragraphe pour éviter le chevauchement avec le bouton */
}

/* Style pour le bouton "Best Market place" */
.marketContainer1Left button {
  background-color: #f36f6f; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
  padding: 10px 20px; /* Espacement intérieur du bouton */
  border: none; /* Supprimer la bordure */
  border-radius: 5px; /* Coins arrondis */
  font-size: 1rem; /* Taille de police du bouton */
  cursor: pointer;
}

.marketContainer1Right {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour l'image */
.marketContainer1Right img {
  width: 100%; /* 100% de la largeur du conteneur */
  height: auto; /* Hauteur automatique pour conserver les proportions de l'image */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
}

.custom-bg {
  background-color: #001f3f; /* Couleur bleu marine de fond */
  padding: 40px; /* Espacement intérieur */
}
.custom-bg h1{
color: #fff;
}

.custom-bg2 {
  background-color: #001f3f; /* Couleur bleu marine de fond */
  color: #fff;
  padding: 40px; /* Espacement intérieur */
}
.custom-bg2 p{
color: #fff;
}

.ContactContainer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alignez le contenu en haut */
  padding: 40px; /* Espacement intérieur de la section */
}

/* Style pour la partie gauche (texte et formulaire) */
.ContactLeft {
  flex: 1; /* Prend 50% de l'espace disponible */
}

/* Style pour le texte */
.ContactLeft p {
  text-align: left; /* Alignez le texte à gauche */
  font-size: 1.2rem;
}

/* Style pour les étiquettes des champs de formulaire */
.ContactLeft label {
  display: block; /* Afficher chaque étiquette sur une nouvelle ligne */
  font-size: 1rem;
  margin-top: 10px;
}

/* Style pour les champs de formulaire */
.ContactLeft input[type="text"],
.ContactLeft input[type="email"],
.ContactLeft textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

/* Style pour le bouton "Send" */
.ContactLeft button {
  background-color: #f36f6f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.ContactLeft button:hover {
  background-color: #e25757; /* Changez la couleur au survol si nécessaire */
}

/* Style pour la partie droite (image) */
.ContactRight {
  flex: 1; /* Prend 50% de l'espace disponible */
  text-align: right; /* Alignez le contenu à droite */
}

/* Style pour l'image */
.ContactRight img {
  width: 100%; /* 100% de la largeur du conteneur */
  height: auto; /* Hauteur automatique pour conserver les proportions de l'image */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
  margin-left: 20px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
