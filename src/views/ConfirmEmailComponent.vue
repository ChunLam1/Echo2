<template >
<div>Thank you for confirming your email</div>
</template>


<script>

import axios from 'axios';
    const currentURL = window.location.href;
    const token = currentURL.split('/').pop();
export default {

    mounted() {
        this.checkToken();
    }, 
  //   data() {
  //       return {
  //           isLogged: false,
  //       }
  //   },
  //   created() {
  //   // Vérifier si le token existe dans le localStorage
  //   if (localStorage.getItem('token')) {
  //     this.isLogged = true; // Mettre à jour la valeur de isLogged si le token existe
  //     console.log('token');
  //   } else {
  //     console.log('no token');
  //     this.isLogged = false; // Mettre à jour la valeur de isLogged si le token n'existe pas
  //   }
  // },
  methods: {
    async checkToken() {
      const url = `http://127.0.0.1:3000/api/auth/confirmEmail/${token}`;
      try {
        const response = await axios.post(url,{token});

        if (response.status === 200) {
          console.log('Token valide !');
          // Ici, vous pouvez effectuer d'autres actions si le token est valide
        } else {
          console.log('Token invalide !');
          // Ici, vous pouvez effectuer d'autres actions si le token est invalide
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du token :', error);
        // Ici, vous pouvez gérer les erreurs de requête, par exemple, afficher un message d'erreur à l'utilisateur.
      }
    },

  },
};
</script>
