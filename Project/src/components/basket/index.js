import { getServerData, postServerData } from '../../webServices';
import { startURL, goods, catalogData, basketData } from '../../constants';

export default Vue.component('basket', {
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
            this.basketList = data;
            this.total_price = this.getTotalBasketPrice();
        });
    }
});
