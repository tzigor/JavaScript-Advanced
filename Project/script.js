
function init() {
    const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
    const catalogData = 'catalogData.json';
    const basketData = 'getBasket.json';
    const addToBasket = 'addToBasket.json';
    const removeFromBusket = 'deleteFromBasket.json';
    let responseStatus = 0;

    async function getServerData(url) {
        try {
            const response = await fetch(url);
            responseStatus = response.status;
            return await response.json()
        } catch (error) { }
    }

    Vue.component('show-basket', {
        props: {
            basket_list: Array
        },
        template: `
           <div>{{ this.basket_list }}</div>
        `
    });

    Vue.component('goods-card', {
        props: {
            item: Object
        },
        template: `
          <div class="goods-item">
              <div class="itemName">{{ item.product_name }}</div>
              <div class="itemPrice">&#36;{{ item.price }}</div>
          </div>`
    });

    Vue.component('basket', {
        props: {
            basket_list: Array,
            total_price: Number,
        },
        template: `
        <div class="cartContent">
           <i @click="$emit('close')" class="fa-regular fa-rectangle-xmark fa-lg closeBasket" style="color: red"></i>

           <div class="cartHeader">
              <div>Название товара</div>
              <div>Количество</div>
              <div>Цена за шт.</div>
              <div>Итого</div>
           </div>

           <basket-item v-for="item in this.basket_list" :item="item"></basket-item>

           <div class="cartFooter">
              Товаров в корзине на сумму: &#36;{{ this.total_price }}
           </div>
      </div> `
    });

    Vue.component('basket-item', {
        props: {
            item: Object
        },
        template: `
           <div class="cartLine">
              <div>{{ item.product_name }}</div>
              <div class="productQty">{{ item.quantity }} шт.</div>
              <div class="price">&#36;{{ item.price }}</div>
              <div class="totalCartPrice">&#36;{{ item.quantity * item.price }}</div>
           </div>`
    });

    Vue.component('cart-button', {
        template: `
            <button class="cart-button" type="button" @click="$emit('click')">
                <slot></slot>
            </button>`
    });

    Vue.component('input-find', {
        template: `
            <input class="input" type="text" @input="$emit('input', $event.target.value)">
        `
    })

    const app = new Vue({
        el: "#root",
        data: {
            noData: true,
            basketVisible: false,
            list: [],
            basketList: [],
            searchString: '',
            serverError: false,
        },
        methods: {
            showBasket() {
                getServerData(startURL + basketData).then((data) => {
                    if (responseStatus !== 200) {
                        this.showError();
                    } else {
                        this.cart = data;
                        this.basketList = this.cart.contents
                    }
                });
                this.basketVisible = true
            },
            closeBasket() {
                this.basketVisible = false
            },
            showError() {
                this.responseStatus = responseStatus;
                this.serverError = true;
                setTimeout(() => this.serverError = false, 5000);
            },
        },
        computed: {
            getTotalPrice() {
                if (this.list !== undefined)
                    return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            getTotalBasketPrice() {
                return this.basketList.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
            filteredList() {
                if (this.list !== undefined)
                    return this.list.filter(({ product_name }) => {
                        return product_name.match(new RegExp(this.searchString, 'gui'))
                    })
            }
        },
        mounted() {
            document.querySelector('body').classList.remove('hide');
            getServerData(startURL + catalogData).then((data) => {
                // getServerData(startURL).then((data) => {
                if (responseStatus !== 200) {
                    this.showError();
                } else {
                    this.list = data;
                    this.noData = false;
                }
            });
        }
    });
}

onload = init;
