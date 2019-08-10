<template>
    <div class="product-list-container">
        <div class="space-list-search input-field">
            <i class="material-icons prefix search-icon">search</i>
            <input class="input-search" type="text" placeholder="Nombre del producto">
        </div>

        <div class="row">
            <div v-for="product in products" v-bind:key="product.id" class="col s12 l3">
                <div class="product-container">
                    <div class="product-image">
                        <img v-bind:src="product.thumbnail" class="product-image" alt="product image">
                    </div>
                    <p class="center-align"><b>{{product.title}}</b></p>
                    <div class="product-footer">
                        <p class="left product-price">$ {{product.price}}</p>
                        <button @click="buyProduct(product)" class="right btn main-button">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as M from 'materialize-css/dist/js/materialize.js'

    const testUrl = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA5726';
    const responseSuccessMessage = "Operación exitosa";
    const responseFailMessage = "Operación fallida";

    export default {
        name: "Search",
        data() {
            return {
                products: [],
                success: false
            }
        },
        mounted() {
            this.getProductsList();
        },
        methods: {
            getProductsList: function () {
                this.$http.get(testUrl)
                    .then((response) => {
                        this.showResponseMessage(response.status);
                        this.products = response.data.results;
                    }).catch(() => {
                    this.showResponseMessage(400);
                });
            },
            buyProduct: function () {
                M.toast({
                    html: responseSuccessMessage,
                    classes: 'toast-success-response'
                });
            },
            showResponseMessage: function (status) {
                if (status === 200) {
                    M.toast({
                        html: responseSuccessMessage,
                        classes: 'toast-success-response'
                    });
                } else {
                    M.toast({
                        html: responseFailMessage,
                        classes: 'toast-fail-response'
                    });
                }
            }
        }
    }
</script>


<style scoped>
    .space-list-search {
        width: 60% !important;
        margin-left: 20% !important;
        height: 50px !important;
        margin-top: 15px !important;
    }

    .search-icon {
        margin-top: 0 !important;
    }

    .input-search {
        border: 1px solid rgba(0, 0, 0, 0.2) !important;
        border-radius: 15px !important;
        padding-left: 20px !important;
    }

    .product-list-container {
        width: 90vw;
        margin-left: 5vw;
        margin-top: 100px !important;
    }

    .product-container {
        border: 1px dashed gray;
        padding: 20px 20px 20px 20px !important;
    }

    .product-image {
        max-height: 300px !important;
        text-align: center !important;
    }

    .product-image img {
        height: 150px !important;
        width: 150px !important;
    }

    .product-info {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }

    .span-feature {
        display: inline-block;
        padding: 5px 10px 5px 10px !important;
        border: 1px dashed blue;
        border-radius: 30px !important;
    }

    .product-info-text > b {
        font-size: 36px !important;
        font-weight: 100 !important;
    }


    .product-price {
        margin-top: -0px !important;
        font-size: 28px !important;
        font-weight: bold;

    }

    .product-footer {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 30px !important;
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

</style>
