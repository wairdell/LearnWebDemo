<template>
    <div class="container">
        <img class="ad_icon" src="http://imgs1.zhuoyixia.com/adimgs/202209/27/1029424a47a0db6e60853dedfcfdf08a5ca249.png" />
        <div style="position: relative; margin-top: .5067rem; display: flex; flex-direction: column; justify-content: center;">
            <img src="../img/bg1.png" width="100%" height="auto" style="position: absolute; left: 0; top: 0;"/>
            <span class="ad_name">H5页面导流1</span>
            <span class="ad_introduce">这是一段纯文字吱吱吱吱大的呃呃</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InteractDemo',
        data() {
            return {
            
            }
        },
        props: {
            
        },
        methods: {
            
        },
        created: function() {
            try {
                var detailsData = JSON.parse(window.android.getDetailsData());
                setTimeout("window.android.gotoInteractLandingPage()", detailsData.sellingPointShowTime * 1000);
            } catch(err) {
                console.log(err.message);
            }
            
        },
        mounted: function() {
            
        }
    }

</script>

<style scoped>

    .container {
        display: flex; 
        height: 100vh;
        widows: 100%;
        background-color: white;
        border-radius: .5333rem .5333rem 0 0;
        flex-direction: column;
        background-color: #000000;
    }

    .ad_icon {
        margin-top: 2.8267rem;
        width: 2.1333rem;
        height: 2.1333rem;
        border-width: .08rem;
        border-radius: .3733rem;
        border-color: #FFFFFF;
        border-style: solid;
        align-self: center;
    }

    .ad_name {
        display: inline;
        color: #FFE556;
        font-size: .4rem;
        height: .9333rem;
        line-height: .9333rem;
        border-color: #26000000;
        border-width: .0267rem;
        border-style: solid;
        width: auto;
        border-radius: .4667rem;
        padding-left: .2667rem;
        padding-right: .2667rem;
    }

    .ad_introduce {
        font-size: .5333rem;
        color: #E35800;
        margin-top: 2rem;
        z-index: 90;
    }

</style>