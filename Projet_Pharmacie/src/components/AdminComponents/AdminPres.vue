<script setup>
</script>

<template>
    <div id="HeaderTitle">
        <img src="../../assets/Admin-Pres-IMG-wB.png" alt="Admin Pres sans BG">
        <div class="title">
            <h2><span>Admin Pannel</span></h2>
            <p><span>Ajoutez</span>, <span>Modifiez</span>, <span>Supprimez</span> ce que <span>vous</span> voulez !</p>
        </div>
    </div>
</template>

<style scoped>

.title {
    justify-content: center;
    display: flex;
    flex-direction: column;
}

span {


    font-weight: bold;
}

h2 {
    font-size: 60px;
    font-weight: initial;
    color: #031927;
}

#HeaderTitle {
    display: flex;
    flex-direction: row;
    padding-inline: 10%;
    margin-bottom: 5%;
    justify-content: space-around;
}

#HeaderTitle img {
    max-width: 40%;
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