import express, { json } from "express"
import cors from "cors"
import { writeFile, readFile } from "fs/promises"
import { read } from "fs";

const basket = './public/getBasket.json';
const goods = './public/catalogData.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

async function readBasket() {
    return readFile(basket, 'utf8')
        .then((basketData) => {
            return JSON.parse(basketData)
        })
}

async function readGoods() {
    return readFile(goods, 'utf8')
        .then((goodsData) => {
            return JSON.parse(goodsData)
        })
}

app.get('/getBasket', (req, res) => {
    Promise.all([
        readBasket(),
        readGoods()
    ]).then(([basketList, goodsList]) => {
        return basketList.map((basketItem) => {
            const goodsItem = goodsList.find(({ id_product: _goodsId }) => {
                return _goodsId === basketItem.id_product
            });
            return {
                ...basketItem,
                ...goodsItem
            }
        });
    }).then((result) => {
        res.send(JSON.stringify(result));
    })
});

app.post('/catalogData', (req, res) => {

});

app.listen('8000', () => {
    console.log('server is starting!');
});