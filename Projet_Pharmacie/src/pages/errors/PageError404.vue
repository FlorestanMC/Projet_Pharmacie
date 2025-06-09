<script setup>
</script>

<template> 
    <div id="error">
        <h1>404 - Page non trouvée</h1>
        <p>Désolé, la page que vous cherchez n’existe pas.</p>
        <img src="https://http.cat/images/404.jpg" alt="404 ERROR IMG">
        <a href="/">Revenir à l’accueil</a>
    </div>
</template>


<style scoped>
    #error {
      display:flex;
      flex-direction: column;
      justify-content: center;  
      font-family: sans-serif;
      text-align: center;
      margin-top: 10vh;
    }

    img {
        display:flex;
        flex-direction: column;
        justify-content: center;
        max-width: 40%;
        padding-inline: 30%;
    }

    h1 {
      font-size: 3em;
      color: #DA0037;
    }

    p {
      font-size: 1.5em;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      color: #1a73e8;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
</style>