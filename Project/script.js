function init() {
    const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
    const catalogData = 'catalogData.json';
    const basketData = 'getBasket.json';
    const addToBasket = 'addToBasket.json';
    const removeFromBusket = 'deleteFromBasket.json';

    const app = new Vue({
        el: "#root",
        data: {
            showBasket: false,
            list: [],
            filteredList: [],
            basketList: []
        },
        computed: {
            getTotalPrice() {
                return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            getTotalBasketPrice() {
                return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            }
        },
        mounted() {
            fetch(startURL + catalogData)
                .then((res) => res.json())
                .then((data) => {
                    this.list = data;
                    this.filteredList = data
                });
            fetch(startURL + basketData)
                .then((res) => res.json())
                .then((data) => {
                    this.cart = data;
                    this.basketList = this.cart.contents
                });
        }
    });
}

onload = init;
