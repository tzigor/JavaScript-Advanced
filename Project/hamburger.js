const hamburgers = [ // информация о видах гамбургеров
    { type: 'Большой', price: 100, calorie: 40 },
    { type: 'Маленький', price: 50, calorie: 20 }
];

const toppings = [ // информация о видах начинки
    { type: 'Сыр', price: 10, calorie: 20 },
    { type: 'Салат', price: 20, calorie: 5 },
    { type: 'Картошка', price: 15, calorie: 10 }
];

const additions = [ // информация о видах добавок
    { type: 'Майонез', price: 20, calorie: 5 },
    { type: 'Приправа', price: 15, calorie: 0 }
];

/**
 * Класс представляет все виды гамбургеров
 */
class Hamburger {
    type = 1; // тип гамбургера: 0 - большой, 1 - маленький
    toppingType = 0; // тип начинки
    mazikQty = 0; // кол-во порций майонеза
    spiceQty = 0; // кол-во порций приправы

    /**
     * метод получает данные о гамбургерах, начинке и добавках извне
     * @param {hamburgers: array} данные о гамбургерах
     * @param {toppings: array} данные о начинке
     * @param {additions: array} данные о добавках
     */
    fetchData(hamburgers, toppings, additions) {
        this.hamburgers = hamburgers;
        this.toppings = toppings;
        this.additions = additions;
    }

    /**
     * метод устанавливает тип гамбургера
     */
    setHamburgerType(type) {
        this.type = type;
        this.infoUpdate();
    }

    /**
     * метод увеличивает кол-во порций майонеза на 1
     */
    addMazik() {
        this.mazikQty++;
        this.infoUpdate();
    }

    /**
     * метод уменьшает кол-во порций майонеза на 1
     */
    removeMazik() {
        if (this.mazikQty > 0) {
            this.mazikQty--;
            this.infoUpdate();
        }
    }

    /**
     * метод увеличивает кол-во порций приправ на 1
     */
    addSpice() {
        this.spiceQty++;
        this.infoUpdate();
    }

    /**
     * метод уменьшает кол-во порций приправ на 1
     */
    removeSpice() {
        if (this.spiceQty > 0) {
            this.spiceQty--;
            this.infoUpdate();
        }
    }

    /**
     * метод плучает тип гамбургера (размер)
     * @returns {string} размер гамбургера
     */
    getHamburgerType() {
        return this.hamburgers[this.type].type;
    }

    /**
     * метод плучает цену гамбургера
     * @returns {number} цена гамбургера
     */
    getHamburgerPrice() {
        return this.hamburgers[this.type].price;
    }

    /**
     * метод плучает калорийность гамбургера
     * @returns {number} калорийность гамбургера
     */
    getHamburgerCalorie() {
        return this.hamburgers[this.type].calorie;
    }

    /**
     * метод устанавливает тип начинки
     */
    setToppingType(type) {
        this.toppingType = type
        this.infoUpdate();
    }

    /**
     * метод плучает тип начинки
     * @returns {string} тип начинки
     */
    getToppingType() {
        return this.toppings[this.toppingType].type;
    }

    /**
     * метод плучает цену начинки
     * @returns {number} цена напчинки
     */
    getToppingPrice() {
        return this.toppings[this.toppingType].price;
    }

    /**
     * метод плучает калорийность начинки
     * @returns {number} калорийность начинки
     */
    getToppingCalorie() {
        return this.toppings[this.toppingType].calorie;
    }

    /**
     * метод плучает общую стоимость заказа
     * @returns {number} общая стоимость заказа
     */
    getTotalPrice() {
        return this.getHamburgerPrice() + this.getToppingPrice() +
            this.mazikQty * this.additions[0].price + this.spiceQty * this.additions[1].price;
    }

    /**
     * метод плучает общую калорийность заказа
     * @returns {number} общая калорийность заказа
     */
    getTotalCalorie() {
        return this.getHamburgerCalorie() + this.getToppingCalorie() +
            this.mazikQty * this.additions[0].calorie + this.spiceQty * this.additions[1].calorie;
    }

    /**
     * метод обновляет информацию о заказе в строке статуса (в Header)
     */
    infoUpdate() {
        document.querySelector('.mazikQty').textContent = this.mazikQty;
        document.querySelector('.mazikQtyTop').textContent = this.mazikQty;
        if (this.mazikQty === 0) document.querySelector('.mazik').classList.add('unSelected')
        else document.querySelector('.mazik').classList.remove('unSelected');
        document.querySelector('.spiceQty').textContent = this.spiceQty;
        document.querySelector('.spiceQtyTop').textContent = this.spiceQty;
        if (this.spiceQty === 0) document.querySelector('.spice').classList.add('unSelected')
        else document.querySelector('.spice').classList.remove('unSelected');
        document.querySelector('.totalPrice').textContent = this.getTotalPrice() + ' руб';
        document.querySelector('.totalСalories').textContent = this.getTotalCalorie();
        document.querySelector('.hamburgerType').textContent = hamburger.getHamburgerType();
        document.querySelector('.toppingType').textContent = hamburger.getToppingType();
    }
}

const hamburger = new Hamburger();
hamburger.fetchData(hamburgers, toppings, additions);
hamburger.infoUpdate();

document.querySelector('.big').addEventListener('click', () => {
    document.querySelector('.big').classList.remove('unSelected');
    document.querySelector('.small').classList.add('unSelected');
    hamburger.setHamburgerType(0); // big
});

document.querySelector('.small').addEventListener('click', () => {
    document.querySelector('.small').classList.remove('unSelected');
    document.querySelector('.big').classList.add('unSelected');
    hamburger.setHamburgerType(1); // small
});

document.querySelector('.cheese').addEventListener('click', () => {
    document.querySelector('.cheese').classList.remove('unSelected');
    document.querySelector('.salad').classList.add('unSelected');
    document.querySelector('.potato').classList.add('unSelected');
    hamburger.setToppingType(0);
});

document.querySelector('.salad').addEventListener('click', () => {
    document.querySelector('.salad').classList.remove('unSelected');
    document.querySelector('.cheese').classList.add('unSelected');
    document.querySelector('.potato').classList.add('unSelected');
    hamburger.setToppingType(1);
});

document.querySelector('.potato').addEventListener('click', () => {
    document.querySelector('.potato').classList.remove('unSelected');
    document.querySelector('.cheese').classList.add('unSelected');
    document.querySelector('.salad').classList.add('unSelected');
    hamburger.setToppingType(2);
});

document.querySelector('.mazikInc').addEventListener('click', () => hamburger.addMazik());
document.querySelector('.mazikDec').addEventListener('click', () => hamburger.removeMazik());
document.querySelector('.spiceInc').addEventListener('click', () => hamburger.addSpice());
document.querySelector('.spiceDec').addEventListener('click', () => hamburger.removeSpice());
