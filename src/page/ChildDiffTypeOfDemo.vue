<template>
    <div>
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChildDiffTypeOfDemo',
        props: {

        }
    }
</script>

<style scoped>
    p:not(:nth-child(1)) {
        background-color: red;
        display: block;
        width: 50px;
        height: 50px;
    }
    /* p:nth-of-type(2) {
        background-color: red;
        display: block;
        width: 50px;
        height: 50px;
    } */
</style>