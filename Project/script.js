const goods = [
    { title: 'Shirt', price: 155 },
    { price: 150 },
    { title: 'Hat' },
    { title: 'Socks', price: 51 },
    { title: 'Jacket', price: 356 },
    { title: 'Shoes', price: 257 },
];

const renderGoodsItem = (title = 'Item', price = 0) =>
    `<div class="goods-item">
        <h3>${title}</h3>
        <p>${price}</p>
    </div>`;

const renderGoodsList = (list = []) => document.querySelector('.goods-list').
    innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');

renderGoodsList(goods);