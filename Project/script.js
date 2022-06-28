
function init() {
    const startURL = 'http://localhost:8000/';
    const goods = 'catalogData';
    const catalogData = 'catalogData.json';
    const basketData = 'getBasket';
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

    function postServerData(url, method = 'post', body = {}) {
        return fetch(
            url,
            {
                method,
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(body)
            }
        ).then((res) => res.json())
    }

    Vue.component('goods-card', {
        props: {
            item: Object
        },
        template: `
          <div class="goods-item">
              <div class="itemName">{{ item.product_name }}</div>
              <button class="qtyButton" @click="this.addItem">Добавить</button>
              <div class="itemPrice">&#36;{{ item.price }}</div>
          </div>`,

        methods: {
            addItem() {
                postServerData(startURL + goods, 'POST', {
                    id_product: this.item.id_product
                })
            }
        }
    });

    Vue.component('basket', {
        data() {
            return {
                basketList: [],
                total_price: 0
            }
        },
        template: `
        <div class="cartContent">
           <i @click="$emit('close')" class="fa-regular fa-rectangle-xmark fa-lg closeBasket" style="color: red"></i>

           <div class="cartHeader">
              <div>Название товара</div>
              <div>Количество</div>
              <div>Цена за шт.</div>
              <div>Итого</div>
              <div></div>
           </div>

           <basket-item v-for="item in this.basketList" :item="item" @add="addItem" @del="delItem"></basket-item>

           <div class="cartFooter">
              Товаров в корзине на сумму: &#36;{{ this.total_price }}
           </div>
        </div> `,
        methods: {
            addItem(id_product) {
                postServerData(startURL + goods, 'POST', {
                    id_product
                }).then((data) => {
                    this.basketList = data;
                    this.total_price = this.getTotalBasketPrice();
                })
            },
            delItem(id_product) {
                postServerData(startURL + goods, 'DELETE', {
                    id_product
                }).then((data) => {
                    this.basketList = data;
                    this.total_price = this.getTotalBasketPrice();
                })
            },
            getTotalBasketPrice() {
                return this.basketList.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },
        },
        mounted() {
            getServerData(startURL + basketData).then((data) => {
                if (responseStatus !== 200) {
                    this.showError();
                } else {
                    this.basketList = data;
                    this.total_price = this.getTotalBasketPrice();
                }
            });
        }
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
              <div>
                 <button @click="$emit('del', item.id_product)" class="basketItemBtn">-</button>
                 <button @click="$emit('add', item.id_product)" class="basketItemBtn">+</button>
              </div>
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
