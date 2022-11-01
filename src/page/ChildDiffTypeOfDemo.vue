<template>
    <div style="background-color: #00ABFF;height: 100vh;">
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
        </div>
        <div class="drops">
            <div class="drop"></div>
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

    .drops{
        display: flex;
        justify-content: center;
    }
    .drop{
        width: 300px;
        height: 300px;
        border-radius: 59% 41% 63% 37% / 22% 26% 74% 78%;
        box-shadow: inset 10px 20px 30px rgba(0, 0, 0, 0.05),
                    10px 10px 20px rgba(0, 0, 0, 0.3),
                    15px 15px 30px rgba(0, 0, 0, 0.05),
                    inset -10px -10px 15px rgba(255, 255, 255, 0.8);
        animation: action 3s linear infinite alternate;
    }
    .drop::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: #fff;
        top: 240px;
        left: 48%;
        border-radius: 42% 58% 37% 63% / 40% 43% 57% 60%;
    }
    .drop::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: #fff;
        top: 265px;
        left: 47%;
        border-radius: 42% 58% 63% 37% / 63% 71% 29% 37%;
    }
    @keyframes action {
        25% {
            border-radius: 30% 70% 44% 56% / 42% 26% 74% 58%;
        }
        50% {
            border-radius: 30% 70% 21% 79% / 57% 26% 74% 43%;
        }
        100% {
            border-radius: 30% 70% 51% 49% / 33% 40% 60% 67%;
        }
    }
</style>