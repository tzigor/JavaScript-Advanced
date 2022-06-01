function init() {
    const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
    const catalogData = 'catalogData.json';
    const basketData = 'getBasket.json';
    const addToBasket = 'addToBasket.json';
    const removeFromBusket = 'deleteFromBasket.json';

    function getServerData(url) {
        return fetch(url).then((res) => res.json())
    }

    const app = new Vue({
        el: "#root",
        data: {
            basketVisible: false,
            list: [],
            basketList: [],
            searchString: ''
        },
        methods: {
            showBasket() {
                this.basketVisible = true
            },
            hideBasket() {
                this.basketVisible = false
            }
        },
        computed: {
            getTotalPrice() {
                return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            getTotalBasketPrice() {
                return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            filteredList() {
                return this.list.filter(({ product_name }) => {
                    return product_name.match(new RegExp(this.searchString, 'gui'))
                })
            }
        },
        mounted() {
            getServerData(startURL + catalogData).then((data) => {
                this.list = data;
            });

            getServerData(startURL + basketData).then((data) => {
                this.cart = data;
                this.basketList = this.cart.contents
            });
        }
    });
}

onload = init;
