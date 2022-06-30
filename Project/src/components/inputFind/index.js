export default Vue.component('input-find', {
    template: `
        <input class="input" type="text" @input="$emit('input', $event.target.value)">
    `
})