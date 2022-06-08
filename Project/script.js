function init() {
    const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
    const catalogData = 'catalogData.json';
    const basketData = 'getBasket.json';
    const addToBasket = 'addToBasket.json';
    const removeFromBusket = 'deleteFromBasket.json';

    function getServerData(url) {
        return fetch(url).then((res) => res.json())
    }

    Vue.component('goods-cart', {
        props: ['item', 'dataFlag'],
        template: `
        
            < div class= "goods-item">
            <div class="itemName">{{ item.product_name }}</div>
            <div class="itemPrice">{{ item.price }}</div>
        </div > `
    });

    const app = new Vue({
        el: "#root",
        data: {
            noData: true,
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
                return this.basketList.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            filteredList() {
                return this.list.filter(({ product_name }) => {
                    return product_name.match(new RegExp(this.searchString, 'gui'))
                })
            }
        },
        mounted() {
            // пока не будет отрисован HTML, скрипт не заработает, и не заработают дериктивы Vue JS
            // (в том числе v-if). И на мгновение мы видим всё, что должно быть спрятано.
            // Этот костыль убирает этот эффект. Не знаю как сделать по другому
            document.querySelector('body').classList.remove('hide');

            getServerData(startURL + catalogData).then((data) => {
                this.list = data;
                this.noData = false;
            });

            getServerData(startURL + basketData).then((data) => {
                this.cart = data;
                this.basketList = this.cart.contents
            });
        }
    });
}

onload = init;
