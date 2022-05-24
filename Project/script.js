const goods = [
    { title: 'Shirt', price: 155 },
    { price: 150 },
    { title: 'Hat' },
    { title: 'Socks', price: 51 },
    { title: 'Jacket', price: 356 },
    { title: 'Shoes', price: 257 },
];

class GoodsItem {
    constructor(title = 'Item', price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
          <div class="goods-item">
            <h3>${this.title}</h3>
            <p>$${this.price}</p>
          </div>`;
    }
}

class GoodsList {
    fetchData() {
        this.list = goods;
    }

    getTotalPrice() {
        return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
    }

    render() {
        const goodsList = this.list.map(item => {
            const goodsItem = new GoodsItem(item.title, item.price);
            return goodsItem.render();
        }).join('');
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
}

const goodsList = new GoodsList();
goodsList.fetchData();
goodsList.render();
console.log(goodsList.getTotalPrice());
document.querySelector('.totalPrice').textContent = 'Total price: $' + goodsList.getTotalPrice();