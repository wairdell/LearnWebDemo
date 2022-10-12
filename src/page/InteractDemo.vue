<template>
    <div class="container" :class="{ container_radius_top: !isLanding, container_radius_full: isLanding}">
        <span class="app_in_video">视频中的app</span>
        <img :src="sponsorLogo" class="ad_icon" />
        <span class="ad_name">{{ adName }}</span>
        <span class="ad_introduce">轻松实现“每天半小时，日赚百元”的小目标，每天发出1000个悬赏红包</span>
        <span class="download_btn" :class="{download_btn_progress: downloading}" @click="onConfirmClick"
            :style="precent">{{buttonText}}</span>
        <span class="app_info">应用名称：众人帮 ｜ 开发者：北京酷酷信息服务有限公司 ｜ 版本号：1.0.6 ｜ <span
                @click="showPermissionActivity">权限列表</span> ｜ <span @click="showPrivacyActivity">隐私政策</span></span>
    </div>
</template>

<script>
    export default {
        name: 'InteractDemo',
        data() {
            return {
                precent: "",
                sponsorLogo: "",
                adName: "",
                advertIntroduce: "",
                advertButton: "",
                downloading: false,
                isLanding: false,
                buttonText: "下载",
                showAppInfo: false,
            }
        },
        props: {
            
        },
        methods: {
            onConfirmClick: function() {
                if (!window.android.installApk("", "", "")) {
                    var detailsData = JSON.parse(window.android.getDetailsData());
                    if (!window.android.isStartDownload() && detailsData.advertAppInfo != undefined && detailsData.advertAppInfo.hasAdvertAppInfo) {
                        window.android.showAdAppInfo();
                        this.showAppInfo = true;
                    } else {
                        window.android.startDownloadTask("", "", "", "");
                    }
                }
                
            },
            showPermissionActivity: function() {
                window.android.showPermissionActivity();
            },
            showPrivacyActivity: function() {
                window.android.showPrivacyActivity();
            },
            download_result: function(result) {
                if(result.isFinish) {
                    this.downloading = false;
                    this.buttonText = this.advertButton;
                } else {
                    this.precent = `--precent:${result.progress};`
                    this.downloading = true;
                }
                console.log("download_result => " + JSON.stringify(result));
            },
            install_result: function(result) {
                console.log("install_result = >" + result);
            },
            download_pause: function() {
                this.downloading = false;
                this.buttonText = "继续下载";
            },
            toggleLandingMode: function() {
                this.isLanding = true;   
            }
        },
        created: function() {
            //h5调原生
            var overPage = JSON.parse(window.android.getOverPageData()).data;
            // console.log(overPage);
            this.sponsorLogo = overPage.sponsorLogo;
            this.adName = overPage.adName;
            this.advertIntroduce = overPage.advertIntroduce;
            this.advertButton = overPage.advertButton == undefined ? "下 载" : overPage.advertButton;
            console.log("advertButton => " + overPage.advertButton);
            console.log(window.location.href);
            //获取url中的参数
            this.isLanding = this.$route.query.landing == 1;
            // window.android.setWebViewBackgroundColor("#00000000");
        },
        mounted: function() {
            //原生调h5
            window.download_result = this.download_result;
            window.install_result = this.install_result;
            window.download_pause = this.download_pause;
            window.toggleLandingMode = this.toggleLandingMode;
        }
    }
</script>

<style scoped>

    .container_radius_top {
        border-radius: .5333rem .5333rem 0 0;
    }

    .container_radius_full {
        border-radius: .5333rem;
    }

    .container {
        display: flex; 
        height: 100vh;
        widows: 100%;
        background-color: white;
        flex-direction: column;
    }

    .app_in_video {
        margin-top: .32rem;
        height: .4533rem;
        line-height: .4533rem;
        font-size: .24rem;
        color: #FF7800;
        padding-left: .28rem;
        min-width: 2.08rem;
        background: url('../img/xlx_voice_interact_video_mark_app.png') no-repeat;
        background-size: auto .4533rem;
        align-self: flex-end;
        margin-right: 14px;
    }
    
    .ad_icon {
        margin-top: .0267rem;
        width: 1.8667rem;
        height: 1.8667rem;
        border-width: .0533rem;
        border-radius: .3733rem;
        border-color: #EDEDED;
        border-style: solid;
        align-self: center;
    }

    .ad_name {
        color: #333333;
        font-size: .4533rem;
        margin-top: .3733rem;
        display: inline-block;
    }

    .ad_introduce {
        color: #666666;
        font-size: .32rem;
        margin-top: .4267rem;
        line-height: .64rem;
        margin-left: 1.36rem;
        margin-right: 1.36rem;
        min-height: 1.28rem;
    }

    .download_btn {
        width: 6.9333rem;
        height: 1.2267rem;
        background: #0089FF;
        border-radius: 4px;
        color: #FFFFFF;
        font-size: .4rem;
        margin-top: 1.3067rem;
        align-self: center;
        text-align: center;
        line-height: 1.2267rem;
    }

    .download_btn_progress::before {
        display: block;
        counter-reset: progress var(--precent); 
        content: counter(progress) '%';
        /* width: ; */
        margin-left: calc(1% * var(--precent));
        color: #fff;
        background-color: #00000033;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
    }
    

    .app_info {
        color: #ACACAC;
        font-size: .2133rem;
        margin-top: .6933rem;
        margin-left: .8rem;
        margin-right: .2133rem;
        
    }

    


</style>