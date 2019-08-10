<template>
    <div class="home">
        <div class="content-text">
            <h1 class="title"><i>Marketplace UdeA</i></h1>
            <h4></h4>
            <hr>
            <p class="flow-text"> El mejor lugar para comprar en la Universidad de Antioquia</p>

            <button @click="redirectSeach" class="btn main-button">Buscar productos</button>
            <button @click="redirectAbout" class="btn main-button">Obtener información</button>
        </div>

        <div class="content-image">
            <img src="../assets/home.jpg" alt="udea image">
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import Footer from "../components/Footer";

    export default {
        name: "Home",
        components: {Footer},
        methods: {
            redirectSeach: function () {
                this.$router.push('/search')

            },
            redirectAbout: function () {
                this.$router.push('/about')
            }
        }
    }
</script>


<style scoped>
    .home {
        width: 100vw !important;
        max-width: 100vw !important;
        height: calc(100vh - 60px) !important;
        overflow-x: hidden;
    }

    .content-text {
        margin-top: 100px !important;
        width: 80% !important;
        margin-left: 10% !important;
        text-align: center !important;
    }

    .flow-text {
        font-weight: 100;
        text-align: center !important;
    }

    .main-button {
        border: 1px dashed #4caf50;
        border-radius: 30px !important;
        background-color: #a5d6a7 !important;
        color: black !important;
        transition: all 0.5s ease;
    }

    .main-button:hover {
        background-color: white !important;
        color: #4caf50 !important;
    }

    .content-image {
        margin-top: 40px !important;
        max-width: 100vw !important;
        width: 100vw !important;
        padding: 0 !important;
    }

    .content-image img {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100vw !important;
        border-radius: 50% 50% 0 0 !important;
    }
</style>
