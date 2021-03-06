// import { Swiper, Clocker, Cell, Group,
//   CellBox, SwiperItem } from 'vux';
import Clocker from 'vux/src/components/clocker/index.vue';
import Cell from 'vux/src/components/cell/index.vue';
import Group from 'vux/src/components/group/index.vue';
import CellBox from 'vux/src/components/cell-box/index.vue';
import Swiper from 'vux/src/components/swiper/swiper.vue';
import SwiperItem from 'vux/src/components/swiper/swiper-item.vue';


import isWifi from '../js/isWifi.js';
import loading from './loading.vue';

//保存图片
import nativeAncestry from '../../../common/js/nativeAncestor.js';
import confirm from './confirm.vue';
import popup from 'dvd-service-js-popup';
import native from 'dvd-service-js-native';
import uA from 'dvd-base-js-ua';
import encrypt from 'dvd-service-js-encrypt';
import $ from 'jquery';

export default {
    data: ()=> {
        return {
          // 商品图 左上角icon
          goodsSwiperIconObj: null,
          isShowBtn: false,
          played: false,//记录在线听书是否被点击
          playIconType: '//9i.dvmama.com/free/Pictures/play.png',
          playState: '',//0表示暂停，1表示播放，2表示加载中
          isMem: true,
          disCount: 6,
          //倒计时活动是否结束
          isOver: false,
          //预告的活动
          actendCometime: 0,
          //是否是第一次预告时间
          isFirstTime: true,
          isComeOver: false,

          duration: "00:00",
          currTime: "00:00",
          playIcon: "播放",
          isPlay: false,
          // preRate: 0,
          offsetX: 0,
          //bar点的left;
          barLeft: 0,
          startX: 0,
          //整个进度条的宽度和距离左边的距离
          progressW: 0,
          progressL: 0,
          buffPro: 0,
          //是否显示进度条
          isShowControl: false,
          timeVideo: null,
          // isWechat: true,
          //loading加载
          isLoad: false,
          //真个容器距离浏览器左边的距离
          wrapL: 0,
          isWifi: true,
          isConfirm: false,
          confirmText: '取消播放',
          cancelText: '继续观看',
          confirmMsg: '温馨提示：您正处于非 wifi 环境，继续观看将消耗流量',
          //视频总长为infination时
          isDuration: true,
          //是否是长按
          isLongTap: true,
          isLongTabTime: null,
          //是否在ios的最新版本
          isNewIos: true,
          isWaitTime: true,
          isShowToast: false,
          isMouseDown: false,
          isPoster: true,
          showText: '当前网络环境较差',
          //不是在ios最新版本第一次显示record后消失
          isShowRecord: true,
          componentName:"goods_swipter"
        }
    },
    props: ['goodsimglist','swiperinfo','trendavatar','videoobj',
        'trendname','goodstatusonsale','goodstatus','goodstatus','goodstatusonsale',
        'actendtime', 'showday','isshowactive','singleactivity',
        'infoobj','isapp','iscomingactive','singlecomeactivity','visitorstatus','otheract','albuminfo','isbiggift','seller'],
    created() {
      // 获取左上角icon 在配置中心的配置
      this.getPreInfo();
      if(uA.isDvdApp() && uA.compareVersion(uA.getDvdAppVersion(), '5.2.0') >= 0) {
        this.isShowBtn = true;
      }
    },
    mounted () {
      let ua = window.navigator.userAgent.toLowerCase();
      if (this.isApp && this.isIOS() && ua.indexOf('wkweb') == -1 && this.getAppVersion() != 392) {
        this.isNewIos = false;
      }
      this.isWechat = this.isWechat();
      let ts =this;
      setTimeout(function(){
        try{
          native.Audio.audioLocation({
            success: function(obj){
              ts.playState = obj.state;
              ts.getState();
            }
          });
        }catch(err){
          console.log(err);
        }

      },500);
    },
  // watch: {
  //   isShowToast(val) {
  //     if (val) {
  //       clearTimeout(this.timeout);
  //       this.timeout = setTimeout(() => {
  //         this.isShowToast = false
  //       }, 3000)
  //     }
  //   },
  // },
    methods: {
      // 获取左上角icon 在配置中心的配置
      getPreInfo () {
        let _this = this;
        let url = '/api/mg/sale/confInfo/getPreInfo?_=' + Date.now();
        $.ajax({
          cache: false,
          async: true,
          url: url,
          type: 'post',
          data: encrypt.ajax({
            confProject: 'sale',
            confModule: 'activity_center'
          }),
          dataType: 'json',
          success(res) {
            try {
              if (res.data.goods_swiper_icon) {
                let goodsSwiperIconObj = JSON.parse(res.data.goods_swiper_icon);
                // 如果有设置开始和结束时间
                if (goodsSwiperIconObj.startTime && goodsSwiperIconObj.endTime) {
                  let sTime = new Date(goodsSwiperIconObj.startTime).getTime();
                  let eTime = new Date(goodsSwiperIconObj.endTime).getTime();
                  let now = Date.now();
                  if (now > sTime && now < eTime) {
                    goodsSwiperIconObj.show = true;
                  } else {
                    goodsSwiperIconObj.show = false;
                  }
                }
                _this.goodsSwiperIconObj = goodsSwiperIconObj;
              }
            } catch (err) {
              console.log(err);
            }
          },
          error(error) {
            console.error(`ajax已执行error回调方法: url=${this.url}, reason=${error.status} ${error.statusText} `);
          }
        });
      },
      listenBook() {
        if(this.isapp) {
          try {
            native.Audio.audioPlay({
              "albumId": this.albuminfo.albumId,
              "musicId": this.albuminfo.musicId
            });
          } catch(err) {
            console.log(err);
          }
        } else {
          let url = '/musicDetail.html?albumId=' + this.albuminfo.albumId + '&musicId=' + this.albuminfo.musicId;
          location.href = url;
        }
      },
      getState(){
        var ts = this;
        if(this.isapp) {
          if(ts.playState == 1 || ts.playState == 2) {
            this.playIconType = '//9i.dvmama.com/free/Pictures/fmIcon.png';
          } else {
            this.playIconType = '//9i.dvmama.com/free/Pictures/play.png';
          }
        }
      },
      getAppVersion() {
        // 空格分所有
        let u = window.navigator.userAgent.toLowerCase();

        let versionStr = u.match(/(ios|android)\.davdian\.com\/([\d\.]+)/i) ||
          u.match(/(ios|android)\.bravetime\.net\/([\d\.]+)/i) ||
          u.match(/(ios|android)\.vyohui\.cn\/([\d\.]+)/i);
        if(versionStr == null){
          return 0;
        }else{
          var v = versionStr[2].split(".").reduce(function(a,b){return +a*10+ +b});
        }
        return +v;
      },
      isWechat() {
        let ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
          return true;
        } else {
          return false;
        }
      },
      isIOS() {
        let u = window.navigator.userAgent.toLowerCase();
        if(u.match(/ios/i)) {
          return true;
        }
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      },
      handleTouchStart (e) {
        this.isLongTabTime = setTimeout(() => {
          if (this.isLongTap) {
            let picSrc = e.target.getAttribute('src');
            let idx = picSrc.indexOf("?");
            picSrc = picSrc.substr(0,idx);
            nativeAncestry.savePic(picSrc);
          }
        },500);
      },
      handleTouchMove (e) {
        this.isLongTap = false;
        clearTimeout(this.isLongTabTime);
      },
      handleTouchEnd (e) {
        this.isLongTap = true;
        clearTimeout(this.isLongTabTime);
      },
      handleTouchCancle (e) {
        this.isLongTap = true;
        clearTimeout(this.isLongTabTime);
      },
      handleSavePic (e) {
        // let picSrc = e.target.getAttribute('src');
        // nativeAncestry.savePic(picSrc);
      },
      handleVideo () {
        this.isPoster = false;
        clearTimeout(this.timeVideo);
        let videoCont = document.querySelector("video");
        videoCont.style.backgroundImage = "none";
        this.isWifi = isWifi();

        if (videoCont.paused) {
          if (this.isWifi) {
            //第一次播放后如果不是在最新的苹果消失record;
            if (!this.isNewIos) {
              this.isShowRecord = false;
            }
            videoCont.play();
            this.isPlay = true;

            clearTimeout(this.timeVideo);
            this.isShowControl = true;
            this.timeVideo = setTimeout(() => {
              this.isShowControl = false;
            }, 6000);
          }else {
            this.isConfirm = true;
          }
        } else {
          clearTimeout(this.timeVideo);
          this.isShowControl = true;
          this.timeVideo = setTimeout(() => {
            this.isShowControl = false;
          }, 6000);
        }
      },
      //暂停
      handlePause () {
        this.isPlay = false;
      },
      handlePlay (e) {
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(this.timeVideo);
        this.isShowControl = true;
        this.timeVideo = setTimeout(() => {
          this.isShowControl = false;
        },6000);

        let videoCont = document.querySelector("video");
        if (videoCont.paused) {
          videoCont.play();
          this.isPlay = true;
        } else {
          videoCont.pause();
          this.isPlay = false;
          this.isLoad = false;
        }
        this.isShowControl = true;
        this.timeVideo = setTimeout(() => {
          this.isShowControl = false;
        },6000)
      },
      handleLoadedmetadata() {
        this.duration = this.$refs.player.duration;
      },
      //时长发生变化
      handleDurationChange() {
        this.duration = this.$refs.player.duration;
      },
      ontimeUpdate (e) {
        this.currTime = this.getFormatTime(this.$refs.player.currentTime);  //当前播放时间
        if (this.$refs.player.duration == 'Infinity') {
          this.isDuration = false;
          return;
        }
        this.duration = this.getFormatTime(this.$refs.player.duration);       // 视频总时长
        //百分比
        this.barLeft = (this.$refs.player.currentTime / this.$refs.player.duration) * 100;
        //获取要缓冲的进度
        let buffered = this.$refs.player.buffered.end(0);          //当前已缓冲长度
        for (var i = 0; i < this.$refs.player.buffered.length; i++) {
          buffered = this.$refs.player.buffered.end(i);
        }
        this.buffPro = parseInt((buffered / this.$refs.player.duration) * 100);
      },
      //正在加载等待时出现loading
      handleWait() {
        this.isLoad = true;
        // this.isShowToast = false;
        setTimeout(() => {
          if (this.isWaitTime) {
            // this.isShowToast = true;
            popup.toast(this.showText,3000);
          }
        },5000);
      },
      //播放时消失loading
      handlePlaying() {
        this.isWaitTime = false;
        this.isLoad = false;
      },
      handleStart (e) {
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(this.timeVideo);
        this.isShowControl = true;

        this.offsetX = 0;

        let progress = document.querySelector('.progress');

        this.progressW = progress.offsetWidth;
        this.progressL = progress.offsetLeft;
        if (this.duration != "00:00") {
          this.startX = e.touches[0].pageX;
          // this.barLeft = e.touches[0].pageX - this.progressL;
          this.$refs.player.currentTime = ((e.touches[0].pageX - this.progressL) / this.progressW) * this.$refs.player.duration;
          this.currTime = this.getFormatTime(this.$refs.player.currentTime);
          this.barLeft = (this.$refs.player.currentTime / this.$refs.player.duration) * 100;
        }
      },
      handleMove (e) {
        e.preventDefault();
        e.stopPropagation();

        if (this.timeVideo) {
          clearTimeout(this.timeVideo);
        }

        if (this.duration != "00:00") {
          this.offsetX = e.targetTouches[0].pageX - this.startX;
          this.$refs.player.currentTime = ((e.targetTouches[0].pageX - this.progressL) / this.progressW) * this.$refs.player.duration;
          this.currTime = this.getFormatTime(this.$refs.player.currentTime);
          this.barLeft = (this.$refs.player.currentTime / this.$refs.player.duration) * 100;

          if (this.barLeft <= 0) {
            this.barLeft = 0;
          }
          if (this.barLeft >= 100) {
            this.barLeft = 100;
          }
        }
      },
      handleEnd (e) {
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(this.timeVideo);
        this.isShowControl = true;
        this.timeVideo = setTimeout(() => {
          this.isShowControl = false;
        },6000);
      },
      //播放完毕
      handleEnded() {
        this.$refs.player.currentTime = 0;
        this.currTime = this.getFormatTime();
        this.barLeft = 0;
        this.isPlay = false;
        this.isShowControl = true;
        this.isLoad = false;
      },
      getFormatTime(time) {
        let times = time || 0;

        let h = parseInt(times/3600),
            m = parseInt(times%3600/60),
            s = parseInt(times%60);
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;

        return m+":"+s;
      },
      handleIdxChange(index) {
        if (index != 3 && this.isapp) {
          if (document.querySelector("video")) {
            let videoCont = document.querySelector("video");
            videoCont.pause();
            this.isPlay = false;
            this.isLoad = false;
          }
        }
      },
      //鼠标事件
      handleMouseD (e) {
        this.isMouseDown = true;
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(this.timeVideo);
        this.isShowControl = true;

        this.offsetX = 0;

        let progress = document.querySelector('.progress');

        this.progressW = progress.offsetWidth;
        this.progressL = progress.offsetLeft;
        this.wrapL = document.querySelector('#goodsDetail').offsetLeft;
        if (this.duration != "00:00") {
          this.startX = e.pageX;
          this.$refs.player.currentTime = ((e.pageX - this.wrapL - this.progressL) / this.progressW) * this.$refs.player.duration;
          this.currTime = this.getFormatTime(this.$refs.player.currentTime);
          this.barLeft = (this.$refs.player.currentTime / this.$refs.player.duration) * 100;
        }
      },
      handleMouseM (e) {
        if (this.isMouseDown) {
          e.preventDefault();
          e.stopPropagation();

          if (this.timeVideo) {
            clearTimeout(this.timeVideo);
          }
          let progress = document.querySelector('.progress');

          this.progressW = progress.offsetWidth;
          this.progressL = progress.offsetLeft;
          this.wrapL = document.querySelector('#goodsDetail').offsetLeft;
          if (this.duration != "00:00") {
            this.offsetX = e.pageX - this.wrapL - this.startX;
            this.$refs.player.currentTime = ((e.pageX - this.wrapL - this.progressL) / this.progressW) * this.$refs.player.duration;
            this.currTime = this.getFormatTime(this.$refs.player.currentTime);
            this.barLeft = (this.$refs.player.currentTime / this.$refs.player.duration) * 100;

            if (this.barLeft <= 0) {
              this.barLeft = 0;
            }

            if (this.barLeft >= 100) {
              this.barLeft = 100;
            }
          }
        }
      },
      handleMouseU (e) {
        this.isMouseDown = false;
        e.preventDefault();
        e.stopPropagation();

        clearTimeout(this.timeVideo);
        this.isShowControl = true;
        this.timeVideo = setTimeout(() => {
          this.isShowControl = false;
        },6000);
      },
      handleConfirmCancel () {
        let videoCont = document.querySelector("video");
        videoCont.play();
        this.isPlay = true;

        clearTimeout(this.timeVideo);
        this.isShowControl = true;
        this.timeVideo = setTimeout(() => {
          this.isShowControl = false;
        }, 6000);
        this.isConfirm = false;
      },
      handleConfirmOk () {
        this.isConfirm = false;
      },
      handleFish () {
        this.isOver = true;
        this.$root.eventHub.$emit('time_over',this.isOver);
      },
    },
    components: {
      Swiper: Swiper,
      SwiperItem: SwiperItem,
      Clocker: Clocker,
      Cell: Cell,
      Group: Group,
      CellBox: CellBox,
      confirm: confirm,
      loading: loading,
    }
}
