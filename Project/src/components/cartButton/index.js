export default Vue.component('cart-button', {
    template: `
        <button class="cart-button" type="button" @click="$emit('click')">
            <slot></slot>
        </button>`
});