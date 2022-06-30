export default Vue.component('goods-card', {
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