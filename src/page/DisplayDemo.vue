<template>
    <div style="width: 300px;">
        <h1>Block</h1>
        <div style="background-color: chartreuse;">
            <div class="blockBox">111111111111 </div>
            <div class="blockBox">222222222222 </div>
            <div class="blockBox">abc cde aa ddeee </div>
        </div>
        <h1>inlineBlock</h1>
        <div style="background-color: chartreuse;">
            <div class="inlineBlockBox">111111111111 </div>
            <div class="inlineBlockBox">222222222222 </div>
            <div class="inlineBlockBox">abc cde aa ddeee </div>
        </div>
        <h1>inline</h1>
        <div style="background-color: chartreuse;">
            <div class="inlineBox">111111111111 </div>
            <div class="inlineBox">222222222222 </div>
            <div class="inlineBox"> abc cde aa ddeee</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayDemo',
        props: {

        }
    }
</script>

<style scoped>
    .blockBox {
        border-style: dashed;
        border-color: red;
        border-width: 2px;
        margin: 5px;
    }
    .inlineBlockBox {
        display: inline-block;
        border-style: dashed;
        border-color: red;
        border-width: 2px;
        margin: 5px;
    }
    .inlineBox {
        display: inline;
        border-style: dashed;
        border-color: red;
        border-width: 2px;
        height: 50px;  
        margin: 5px;
    }
</style>