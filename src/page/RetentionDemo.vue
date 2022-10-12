<template>
    <div class="retentionDemo" style="display: flex; align-items: center; height:100vh;">
        <div class="content_container">
            <!-- 最底下红色背景 绝对定位 -->
            <div class="bg1"></div>
            <!-- 内容 -->
            <div class="main_content">
                <span class="remaining_places">剩余名额：1人</span>
                <ul class="reward-container">
                    <li><span class="reward-count">0.27</span></li>
                    <li><span class="reward-name">金币</span></li>
                </ul>
                <div class="experience-requirements-container">
                    <div class="divider-line"></div>
                    <span class="requirements-title">体验要求</span>
                    <div class="divider-line"></div>
                </div>
                <div class="requirements-desc-container">
                    <div class="ad-info">
                        <img class="ad-img" />
                        <span class="ad-name">开源战役开源</span>
                    </div>
                    <div class="desc-text-conatiner">
                        <span class="desc-text">打开开源战役注册后将商品加入购物车并体验40秒,打开开源战役注册后将商品加入购物车并体验40秒,打开开源战役注册后将商品加入购物车并体验40秒</span>
                    </div>
                </div>
                <span class="how_get_reward">如何领奖</span>
            </div>
            <!-- 为了把父元素撑开 -->
            <!-- <div style="height: 88px;"></div> -->
            <div class="download_box">
                <span class="download_button">飞速下载中…（65%）</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'RetentionDemo',
    props: {

    }
}    
</script>
<style lang='scss' scoped>

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
}

.content_container {
    width: 8rem;
    position: relative;
    margin: 0px auto;
}

.bg1 {
    background-color: #d10027;
    border-radius: 47px 47px 15px 15px;
    width: inherit;
    /* height: 300px;  */
    position: absolute;
    top: 1.3333rem;
    left: 0px;
    bottom: 0px;
    /* white-space: nowrap; */
}

.main_content {
    margin: 0px auto;
    width: 7.4667rem;
    background: white;
    border-color: #FFE8EC;
    border-style: solid;
    border-radius: 30px;
    border-width: 5px;
    position: relative;

    .remaining_places {
        font-size: .4rem;
        background-color: #FFE8EC;
        border-radius: 0px 0px 12px 12px;
        color: #FF1717;
        text-align: center;
        padding-left: .5867rem;
        padding-right: .5867rem;
        padding-top: .16rem;
        padding-bottom: .1333rem;
    }

    .reward-container {
        margin-top: .5867rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .reward-count {
            font-size: .9067rem;
            color: #FF295B;
            font-weight: bold;
            font-family: DINAlternate-Bold, DINAlternate;
        }

        .reward-name {
            font-size: .6933rem;
            color: #FF295B;
            font-weight: 500;
            margin-left: .1067rem;
            font-family: PingFangSC-Medium, PingFang SC;
        }
    }

    .experience-requirements-container {
        display: flex;
        align-items: center;

        .divider-line {
            height: 1px;
            background-color: #E7E7E7;
            flex: 1;

            &:nth-child(1) {
                margin-left: .7733rem;
            }

            &:nth-last-child(1) {
                margin-right: .7733rem;
            }
        }

        .requirements-title {
            color: #555555;
            font-size: .3467rem;
            margin: auto;
            background-color: inherit;
            padding-left: .5867rem;
            padding-right: .5867rem;
            position: relative;
        }

    }

    .requirements-desc-container {
        background: linear-gradient(#FFECB9, #FFF9EA); 
        margin-top: .48rem; 
        margin-left: .5333rem; 
        margin-right: .5333rem; 
        border-radius: .1333rem; 
        text-align: left; 
        overflow: hidden;

        .ad-info {
            margin-top: .32rem; 
            margin-left: .2933rem; 
            display: flex; 
            align-items: center;

            .ad-img {
                width: .5333rem; 
                height: .5333rem; 
                background: red; 
                border-radius: .2667rem;  
                flex-shrink: 0;
            }

            .ad-name {
                color: #FF7800; 
                font-size: .3467rem; 
                color: #FF7800; 
                margin-left: .1333rem; 
            }
        }

        .desc-text-conatiner {
            background-color: white; 
            border-radius: .1333rem; 
            margin: .2667rem .2933rem 0rem .2933rem; 
            padding: .2667rem .48rem .8rem .48rem;

            .desc-text {
                color: #300000; 
                font-size: .3733rem;
            }
        }
    }
}


.how_get_reward {
    position: absolute;
    right: -0.2133rem;
    top: .8267rem;
    font-size: .2933rem;
    color: white;
    padding-top: .16rem;
    padding-bottom: .16rem;
    text-align: center;
    width: .64rem;
    background: url('../img/xlx_voice_landing_multiple_reward_awards_raiders1.webp') no-repeat;
    background-size: 100% 100%;
    writing-mode: vertical-lr;
    min-height: 1.7067rem;
    line-height: .64rem;
}

.download_box {
    background: url("../img/xlx_voice_multiple_reward_reserved_bottom.png") no-repeat;
    background-size: 8rem 3.1467rem;
    width: inherit;
    height: 3.1467rem;
    left: 0px;
    bottom: .2133rem;
    margin-top: -0.8rem;
    position: relative;

    .download_button {
        font-size: .4267rem;
        color: #C24000;
        width: 5.8667rem;
        height: 1.44rem;
        line-height: 1.44rem;
        text-align: center;
        background: url('../img/bg_button_progress.png') no-repeat;
        background-size: 5.8667rem;
        text-align: center;
        bottom: .4267rem;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        /* margin-left: -110px; */
    }
}
</style>