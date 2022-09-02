<template>
    <div>
        <div>
            <p>1</p>
            <div>2</div>
            <p>3</p>
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
    /* p:nth-child(2) {
        background-color: red;
        display: block;
        width: 50px;
        height: 50px;
    } */
    p:nth-of-type(2) {
        background-color: red;
        display: block;
        width: 50px;
        height: 50px;
    }
</style>