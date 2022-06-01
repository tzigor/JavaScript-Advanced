const startURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const catalogData = 'catalogData.json';
const basketData = 'getBasket.json';
const addToBasket = 'addToBasket.json';
const removeFromBusket = 'deleteFromBasket.json';

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
    cart = {};
    list = [];
    getTotalPrice() {
        return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
    }
    render() {
        this.list.forEach(cartLine => {
            const totalCartPrice = cartLine.price * cartLine.quantity;
            let newLine = document.createElement('div');
            newLine.innerHTML = `<div class="cartLine" data-id="${cartLine.id_product}">` +
                `<div>${cartLine.product_name}</div>` +
                `<div class="productQty">${cartLine.quantity} шт.</div>` +
                `<div class="price">$${cartLine.price.toFixed(2)}</div>` +
                `<div class="totalCartPrice">$${totalCartPrice.toFixed(2)}</div></div>`;
            document.querySelector('.cartHeader').after(newLine);
        });
        document.querySelector('.totalCost').textContent = '$' + this.getTotalPrice().toFixed(2);
    }
}

// слушаем клик по кнопке
const cartContentEl = document.querySelector('.cartContent');
document.querySelector('.cart-button').addEventListener('click', () => {
    cartContentEl.classList.toggle('hide');
});

const basket = new Basket();
const goodsList = new GoodsList();

function useCatalogData(data) {
    goodsList.list = data;
    goodsList.render();
    document.querySelector('.totalPrice').textContent = 'Total price: $' + goodsList.getTotalPrice();
}

function useBasketData(data) {
    basket.cart = data;
    basket.list = basket.cart.contents;
    basket.render();
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
    .then((data) => useBasketData(data));
