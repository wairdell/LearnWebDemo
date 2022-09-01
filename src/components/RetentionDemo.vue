<template>
    <div class="retentionDemo">
        <div style="width: 300px; position: relative; margin: 0px auto;">
            <div class="bg1"></div>
            <div class="main_content">
                <span class="remaining_places">剩余名额：1人</span>
                <ul style="margin-top: 22px; display: flex; align-items: center; justify-content: center;" >
                    <li><span class="reward-count">0.27</span></li>
                    <li><span class="reward-name">金币</span></li>
                </ul>
                <div style="display: flex; align-items: center;">
                    <div style="height: 1px; background-color: #E7E7E7; flex: 1; margin-left: 29px;"></div>
                    <span style="color: #555555; font-size: 13px; margin: auto; background-color: inherit; padding-left: 22px; padding-right: 22px;  position: relative;">体验要求</span>
                    <div style="height: 1px; background-color: #E7E7E7; flex: 1; margin-right: 29px;"></div>
                </div>
                <div style="background: linear-gradient(#FFECB9, #FFF9EA); margin-top: 18px; margin-left: 20px; margin-right: 20px; border-radius: 5px; text-align: left; overflow: hidden;">
                    <div style="margin-top: 12px; margin-left: 11px; display: flex; align-items: center;">
                        <img style="width: 20px; height: 20px; background: red; border-radius: 10px;  flex-shrink: 0;"/>
                        <span style="color: #FF7800; font-size: 13px; color: #FF7800; margin-left: 5px; ">开源战役开源</span>
                    </div>
                    <div style="background-color: white; border-radius: 5px; margin: 10px 11px 0px 11px; padding: 10px 18px 30px 18px;">
                        <span style="color: #300000; font-size: 14px;">打开开源战役注册后将商品加入购物车并体验40秒</span>
                    </div>
                </div>
                <div class="how_get_reward"><span style="margin: 0px auto; text-align: center;">如何领奖</span></div>
            </div>
            <div style="height: 88px;"></div>
            <img src="../img/xlx_voice_multiple_reward_reserved_bottom.png" style="position: absolute; width: inherit; left: 0px; bottom: 8px;"/>
            <span class="download_button">飞速下载中…（65%）</span>
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
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
    }

    .bg1 {
        background-color: #d10027; 
        border-top-left-radius: 94px; 
        border-radius: 47px 47px 15px 15px; 
        width: inherit; 
        height: 300px; 
        position: absolute; 
        /* top: 50px;  */
        left: 0px; 
        bottom: 0px;
        /* white-space: nowrap; */
    }

    .main_content {
        margin: 0px auto; 
        width: 280px; 
        background: white; 
        border-color: #FFE8EC; 
        border-style:solid; 
        border-radius: 30px; 
        border-width: 5px; 
        position: relative;
    }
    
    .remaining_places {
        font-size: 15px;
        background-color: #FFE8EC; 
        border-radius: 0px 0px 12px 12px;
        color: #FF1717;
        text-align: center;
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 6px;
        padding-bottom: 5px;
    }

    .reward-count {
        font-size: 34px;
        color: #FF295B;
        font-weight: bold;
        font-family: DINAlternate-Bold, DINAlternate;
    }

    .reward-name {
        font-size: 26px;
        color: #FF295B;
        font-weight: 500;
        margin-left: 4px;
        font-family: PingFangSC-Medium, PingFang SC;
    }

    .how_get_reward {
        position: absolute;
        right: -8px;
        top: 31px;
        font-size: 11px;
        color: white;
        padding-top: 6px;
        padding-bottom: 6px;
        text-align: center;
        width: 24px;
        line-height: 12px;
        display: flex;
        background: url('../img/xlx_voice_landing_multiple_reward_awards_raiders1.webp') no-repeat;
        background-size: 24px;
        writing-mode: vertical-lr;
    }

    .inner_box {
        width: 20px;
        margin-right: 1px;
        background-color: #FF295B;
        height: 30px;
    }

    .inner_box:nth-last-child(1) {
        flex-basis: 40px;
        background-color: aquamarine;
    }
    
    .download_button {
        font-size: 16px; 
        color: #C24000; 
        width: 220px;
        height: 54px;
        line-height: 54px;
        text-align: center; 
        background: url('../img/bg_button_progress.png') no-repeat; 
        background-size: 220px;
        position: absolute; 
        text-align: center;
        bottom: 24px; 
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        /* margin-left: -110px; */
    }
</style>