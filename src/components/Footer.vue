<template>
    <div class="container">
        <h3>{{title}}</h3>
        <h5>{{description}}</h5>
    </div>
</template>
<script>
export default{
    props:{
        title: { type: String, default: 'Footer' },
        description: { type: String, default: 'Version 1.0' }
    },
    data(){
        title: this.title;
        description: this.description;
    },
}
</script>

<style scoped>
:host {
    display: block;
}
</style>



