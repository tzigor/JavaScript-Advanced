const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const catalogData = 'catalogData.json';
const basketData = 'getBasket.json';
const addToBasket = 'addToBasket.json';
const removeFromBusket = 'deleteFromBasket.json';

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
    list = [];

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
    list = [];
}

const basket = new Basket();
const goodsList = new GoodsList();

function useCatalogData(data) {
    goodsList.list = data;
    goodsList.render();
    document.querySelector('.totalPrice').textContent = 'Total price: $' + goodsList.getTotalPrice();
}

fetch(startURL + catalogData, {
    method: 'get',
    headers: {}
})
    .then((res) => res.json())
    .then((data) => useCatalogData(data));

fetch(startURL + basketData, {
    method: 'get',
    headers: {}
})
    .then((res) => res.json())
    .then((data) => {
        basket.list = data;
        debugger
    });
