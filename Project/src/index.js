import './style.css';
import { startURL, goods, catalogData, basketData } from './constants';
import { getServerData, postServerData } from './webServices';
import './components/cartButton';
import './components/inputFind';
import './components/goodsCard';
import './components/basketItem';
import './components/basket';

function init() {
    let responseStatus = 200;
    const app = new Vue({
        el: "#root",
        data: {
            noData: true,
            basketVisible: false,
            list: [],
            basketList: [],
            searchString: '',
            serverError: false,
        },
        methods: {
            showBasket() {
                this.basketVisible = true
            },
            closeBasket() {
                this.basketVisible = false
            },
            showError() {
                this.responseStatus = responseStatus;
                this.serverError = true;
                setTimeout(() => this.serverError = false, 5000);
            },
        },
        computed: {
            getTotalPrice() {
                if (this.list !== undefined)
                    return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);
            },

            filteredList() {
                if (this.list !== undefined)
                    return this.list.filter(({ product_name }) => {
                        return product_name.match(new RegExp(this.searchString, 'gui'))
                    })
            }
        },
        mounted() {
            document.querySelector('body').classList.remove('hide');
            getServerData(startURL + catalogData).then((data) => {
                if (responseStatus !== 200) {
                    this.showError();
                } else {
                    this.list = data;
                    this.noData = false;
                }
            });
        }
    });
}

onload = init;
