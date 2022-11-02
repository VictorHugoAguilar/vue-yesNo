<template>
    <div class="container">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    
    data(){
        return {
            title = this.title;
        }
    }
}
</script>

<style scoped>
:host {
    display: block;
}
</style>
