<script setup>
</script>

<template>
    <div id="HeaderTitle">
        <div class="title">
            <h2>Les <span>meilleurs</span> produits aux <span>meilleurs</span> prix</h2>
            <button type="button">C'est parti !</button>
        </div>

        <img src="../../assets/Header-IMG-wBG.png" alt="">
    </div>
</template>
<style scoped>
span {


    font-weight: bold;
}

h2 {
    font-size: 80px;
    font-weight: initial;
    color: #031927;
}

#HeaderTitle {
    display: flex;
    flex-direction: row;
    padding-inline: 10%;
    margin-bottom: 5%;
}

#HeaderTitle img {
    max-width: 60%;
}

button {
    padding: 20px;
    font-weight: bold;
    font-family: "Poppins";
    background: #031927;
    color: white;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    border: 1px solid #031927;
    color: #031927;
    background-color: #e1edfd;
}
</style>