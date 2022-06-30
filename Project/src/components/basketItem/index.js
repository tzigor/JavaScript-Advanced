export default Vue.component('basket-item', {
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