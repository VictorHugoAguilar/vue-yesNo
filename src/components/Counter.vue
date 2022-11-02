<template>
    <h2>{{ getTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p data-test-id="counter" >{{counter}}</p>
    <div>
        <button @click="suma()">+1</button>
        <button v-on:click="resta()">-1</button>
    </div>
</template>

<script>
export default {
    // name: 'counter-component'
    props: {
        title: {
            type: String,
        },
        start: {
            type: Number,
            default: 1,
            validator(value) {
                return value > 0 && value <= 100;
            },
        },
    },

    data() {
        return {
            counter: this.start,
        };
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter;
        },
        resta() {
            this.counter--;
        },
        suma() {
            this.counter++;
        },
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter;
        },
        getTitle() {
            return this.title || "Counter";
        },
    },
};
</script>

<style>
button {
    background-color: #64b687;
    border-radius: 5px;
    border: 1px solid whinte;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    transition: 0.3s ease-in-out;
}
button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>
