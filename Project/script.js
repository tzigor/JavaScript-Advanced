const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const catalogData = 'catalogData.json';
const basketData = 'getBasket.json';
const addToBasket = 'addToBasket.json';
const removeFromBusket = '/deleteFromBasket.json';

function requestServer(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) alert(`Ошибка ${xhr.status}: ${xhr.statusText}`)
        else callback(xhr.responseText);
    }
}

class GoodsItem {
    constructor(product_name = 'Item', price = 0) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `
          <div class="goods-item">
            <h3>${this.product_name}</h3>
            <p>$${this.price}</p>
          </div>`;
    }
}

class GoodsList {
    fetchData() {
        requestServer(startURL + catalogData, (goods) => {
            this.list = JSON.parse(goods);
            goodsList.render();
            document.querySelector('.totalPrice').textContent = 'Total price: $' + goodsList.getTotalPrice();
        });
    }

    getTotalPrice() {
        return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
    }

    render() {
        const goodsList = this.list.map(item => {
            const goodsItem = new GoodsItem(item.product_name, item.price);
            return goodsItem.render();
        }).join('');
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
}

class Basket {
    fetchData() {
        requestServer(startURL + basketData, (basketContent) => {
            this.basketLst = JSON.parse(basketContent);
        });
    }

}

const basket = new Basket();
basket.fetchData();
console.log(basket.basketLst);
const goodsList = new GoodsList();
goodsList.fetchData();
