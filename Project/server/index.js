import express, { json } from "express"
import cors from "cors"
import { writeFile, readFile } from "fs/promises"
// import { read } from "fs";
// import { send } from "process";

const basketPath = './public/getBasket.json';
const goodsPath = './public/catalogData.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

function getModifiedBasket() {
    return Promise.all([
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
    })
}

async function readBasket() {
    return readFile(basketPath, 'utf8')
        .then((basketData) => {
            return JSON.parse(basketData)
        })
}

async function readGoods() {
    return readFile(goodsPath, 'utf8')
        .then((goodsData) => {
            return JSON.parse(goodsData)
        })
}

app.get('/getBasket', (res, req) => {
    getModifiedBasket().then((result) => {
        req.send(JSON.stringify(result));
    })
});

app.post('/catalogData', (res, req) => {
    readBasket().then((basket) => {
        const basketItem = basket.find((item) => item.id_product === res.body.id_product);
        if (!basketItem) {
            basket.push(
                {
                    id_product: res.body.id_product,
                    quantity: 1
                }
            )
        } else {
            basket = basket.map((item) => {
                if (item.id_product === res.body.id_product) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        }
        return writeFile(basketPath, JSON.stringify(basket)).then(() => {
            return getModifiedBasket()
        }).then((result) => {
            req.send(JSON.stringify(result))
        });
    })
});

app.delete('/catalogData', (res, req) => {
    readBasket().then((basket) => {
        basket = basket.map((item, index) => {
            if (item.id_product === res.body.id_product) {
                if (item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }

            } else {
                return item
            }
        });
        const itemToDelete = basket.findIndex((item) => item.quantity === 0);
        if (itemToDelete !== -1) basket.splice(itemToDelete, 1);
        return writeFile(basketPath, JSON.stringify(basket)).then(() => {
            return getModifiedBasket()
        }).then((result) => {
            req.send(JSON.stringify(result))
        });
    })
});

app.listen('8000', () => {
    console.log('server is starting!');
});