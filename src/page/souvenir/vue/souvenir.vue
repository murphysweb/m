<template>
  <div class="background">
    <div class="title_text tit" style="top: 1.4rem;font-size: 0.21rem;">10月19、20、21日</div>
    <div class="title_text tit" style="top: 1.75rem;">连续三天购物</div>
    <div class="title_text tit" style="top: 2.1rem;">即可获大V店三周年纪念品</div>
    <div class="title_text" style="font-size: 0.14rem;top: 2.59rem;">限量15000个，先到先得</div>

    <template v-if="!isLogin">
      <!--未登录-->
      <div class="big_img">
        <!--<img src="//9i.dvmama.com/free/2017/09/29/bg2.png" alt="">-->
      </div>
      <div class="nologin">您还未登录哦~</div>
      <div class="btn1" @click="login">
        立即登录
      </div>
    </template>

    <template v-if="isLogin">
      <template v-if="!isVip">
        <!--非会员-->
        <div class="big_img">
          <!--<img src="//9i.dvmama.com/free/2017/09/29/bg2.png" alt="">-->
        </div>
        <div class="nologin">会员才能参与该活动哦~</div>
        <div class="btn1" @click="vip">
          开通会员
        </div>
      </template>
      <template v-if="isVip">
        <!--活动中-->
        <div class="big_img3">
          <!--<img src="//9i.dvmama.com/free/2017/09/30/bg5.png" alt="">-->
        </div>

        <div class="range">
          <div class="date">
            <template v-for="item in realTimeList">
              <div :class="{ 'readyshop_date': item.isBuy==1,'noshop_date':item.isBuy==0}" class="default" v-text="item.text"></div>
            </template>
          </div>
          <div class="circle">
            <template v-for="item in realTimeList">
              <div v-if="item.isBuy==1"><img src="//9i.dvmama.com/free/2017/09/30/%E8%BF%9B%E5%BA%A61%E5%B7%B2%E9%80%89%E4%B8%AD.png" alt=""></div>
              <div v-if="item.isBuy==0"><img src="//9i.dvmama.com/free/2017/09/30/%E8%BF%9B%E5%BA%A6%E6%9C%AA%E9%80%89%E4%B8%AD.png" alt=""></div>
            </template>
          </div>
          <div class="state">
            <template v-for="item in realTimeList">
              <div v-if="item.isBuy==1" class="default2 readyshop_date">已购物</div>
              <div v-if="item.isBuy==0" class="default2 noshop_date">未购物</div>
            </template>
          </div>
        </div>


        <template v-if="state==0">
          <template v-if="shopStocks>0">
            <div class="noshop" v-if="buyStatus=='failed'">很遗憾您错过了这次活动~</div>
            <div class="noshop" v-if="buyStatus=='haveTwo'">再购物一次就能获得周年庆纪念品啦</div>
            <div class="noshop" v-if="buyStatus=='readyGet' && getSouvenir==1">已获得三周年纪念品</div>

            <div class="goshop" v-if="buyStatus!='readyGet'">连续三天购物即可获得</div>

            <div class="only" :class="{'class2':buyStatus=='readyGet'}">仅剩 <span v-text="shopStocks"></span> 个名额</div>

            <div class="desc" v-if="buyStatus=='readyGet'">15个工作日后选取您21日首个已支付且未退货的订单收货地址,将纪念品寄给您</div>
          </template>

          <template v-if="shopStocks==0">
            <div class="noshop">没有名额啦~</div>

            <div class="goshop" v-if="getSouvenir==1">已获得三周年纪念品</div>
            <div class="goshop" v-if="getSouvenir==0">很遗憾您错过了这次活动</div>
            <div class="only">没有名额啦</div>
          </template>

          <div class="bg" :class="{'class3':shopStocks>0 && buyStatus=='readyGet'}"></div>
          <div class="goods" :class="{'class3':shopStocks>0 && buyStatus=='readyGet'}">
            <div style="width: 1.1rem;border-radius: 12px 0 0 12px;"><img :src="imageUrl" alt=""></div>
            <div style="width: 1.5rem;">
              <div class="souvenir">周年庆纪念品</div>
              <div class="souvenir_detail" @click="go_topic">查看详情>>></div>
            </div>
          </div>

          <div class="btn_all" @click="goActMain" v-if="(buyStatus=='haveTwo')">
            快去买买买
          </div>
          <div class="btn_all" @click="goActMain" v-if="(buyStatus=='failed') || (buyStatus=='readyGet' && shopStocks==0)">
            快去买买买
          </div>
          <div class="btn_all" @click="goActMain" v-if="buyStatus=='readyGet' && shopStocks>0">
            快去买买买
          </div>


        </template>

        <template v-if="state==2">

          <div class="noshop">活动结束啦~~</div>

          <template v-if="getSouvenir==0">
            <div class="goshop">很遗憾您错过了这次活动</div>
            <div class="btn_all" @click="goActMain">
              快去买买买
            </div>
          </template>

          <template v-if="getSouvenir==1 && buyStatus=='readyGet'">
            <div class="goshop">已获得三周年纪念品</div>
            <div class="btn_all" @click="goActMain">
              快去买买买
            </div>
          </template>

          <div class="only" v-if="shopStocks>0">仅剩 <span v-text="shopStocks"></span> 个名额</div>
          <div class="only" v-if="shopStocks==0">没有名额啦</div>

          <div class="bg"></div>
          <div class="goods">
            <div style="width: 1.1rem;border-radius: 12px 0 0 12px;"><img :src="imageUrl" alt=""></div>
            <div style="width: 1.5rem;">
              <div class="souvenir">周年庆纪念品</div>
              <div class="souvenir_detail" @click="go_topic">查看详情>>></div>
            </div>
          </div>


        </template>
      </template>
    </template>

    <div class="rute1">
      <div style="margin-top: 0;text-align: center;"><span class="line"></span><span style="font-size:0.15rem;padding: 0 0.1rem">活动规则</span><span class="line"></span></div>
      <div style="margin-top: 0.2rem">1. 活动时间：10月19日00:00:00~10月21日23:59:59；</div>
      <div>2. 仅限大V店会员参与该活动，19日之前必须为会员身份；</div>
      <div>3. 10月19日、20日、21日三天连续购物即可获得大V店3周年定制纪念品(限量15000个),每天购物金额不限,每个会员仅有1次获得纪念品的机会；</div>
      <div>4. 因退货、换货等原因导致不满足连续 3天购物的情况,视为主动放弃该活动；</div>
      <div>5. 获得的纪念品将于15个工作日后安排发货,收货地址以10月21日首个已支付且未退货订单的收货地址为准；</div>
      <div>6. 开通会员订单不参与该活动；</div>
      <div>7. 1元开会员用户不参与该活动；</div>
      <div>8. 详情可咨询大V店客服。</div>
    </div>

  </div>
</template>
<script>
  import share from "dvd-service-js-share"
  import util from "../../../common/js/utils.es6"
  import login from "dvd-service-js-login"
  import common from "dvd-service-js-common"
  import native from "dvd-service-js-native"
  import api from "../../../common/js/api.es6"
  export default{
    mounted(){
      native.Browser.setHead({
        shareBtn: "1"
      });
      share.setShareInfo({
        title: "连续三天购物可获得大V店纪念品",
        desc: "10月19、20、21三天连续购物可获得大V店周年纪念品，限量15000个，快来~~~",
        link: window.location.href,
        imgUrl: "http://mamaj-oss.oss-cn-beijing.aliyuncs.com/free/2017/10/12/%E6%BB%A1399%E9%80%81%E5%A4%A7V%E4%B8%89%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E5%93%81%E5%88%86%E4%BA%AB%E7%BC%A9%E7%95%A5%E5%9B%BE.png"
      });
      this.init();
    },
    data(){
      return {
        state: null,
        imageUrl: null,
        shopStocks: null,
        timeList: [],
        isApp: util.utils.isApp(),
        isLogin: null,
        isVip: null,
        buyStatus: null,
        getSouvenir: null
      }
    },
    computed: {
      realTimeList(){
        var arr = [];
        this.timeList.map(function (item, index) {
          if (item.time == '20171019') {
            item.text = '10.19';
            Vue.set(arr, 0, item);
          }
          if (item.time == '20171020') {
            item.text = '10.20';
            Vue.set(arr, 1, item);
          }
          if (item.time == '20171021') {
            item.text = '10.21';
            Vue.set(arr, 2, item);
          }
        });
        return arr;
      }
    },
    methods: {
      checkStatus(){
        var realTimeList = this.realTimeList;
        if (!(realTimeList[0].isBuy == 1 && realTimeList[1].isBuy == 1)) {
          this.buyStatus = 'failed';
        } else if (realTimeList[0].isBuy == 1 && realTimeList[1].isBuy == 1 && realTimeList[2].isBuy == 0) {
          this.buyStatus = 'haveTwo';
        } else if (realTimeList[0].isBuy == 1 && realTimeList[1].isBuy == 1 && realTimeList[2].isBuy == 1) {
          this.buyStatus = 'readyGet';
        }
      },
      goActMain(){
        if (this.isApp) {
          native.Browser.open({
            url: "/act_1018_main.html"
          })
        } else {
          window.location.href = "/act_1018_main.html";
        }
      },
      go_topic(){
        if (this.isApp) {
          native.Browser.open({
            url: "/600562.html?rp=index&rl=timeshop_goods-728-66559"
          })
        } else {
          window.location.href = "/600562.html?rp=index&rl=timeshop_goods-728-66559";
        }
      },
      vip(){
        if (this.isApp) {
          native.Browser.open({
            url: "/index.php?c=ShopGoods&a=index&id=348&rp=index&rl=invite_button"
          })
        } else {
          window.location.href = "/index.php?c=ShopGoods&a=index&id=348&rp=index&rl=invite_button";
        }
      },
      getStaus(){
        var token = login.getDvdsid().substr(32, 8);
        if (token == "00000001") {
          return 0;
        } else {
          if (token.substr(7, 1) == 1) {
            return 1;
          } else {
            return 3
          }
        }
      },
      login(){
        var that = this;
        if (that.isApp) {
          native.Account.login()
        } else {
          window.location.href = '/login.html?' + 'referer=' + encodeURIComponent(window.location.href)
        }
      },
      init(){
        var that = this;
        if (this.getStaus() == 0) {
          this.isLogin = false;
        } else {
          if (this.getStaus() == 1) {
            this.isVip = false;
            this.isLogin = true;
          } else if (this.getStaus() == 3) {
            this.isLogin = true;
            this.isVip = true;
            api("/api/mg/sale/continueshopgift/index")
              .then(function (result) {
                common.checkRedirect(result);
                if (result.code == 0) {
                  if (result.data) {
                    that.state = result.data.code;
                    that.imageUrl = result.data.imageUrl;
                    that.shopStocks = result.data.shopStocks;
                    that.timeList = result.data.timeList;
                    that.getSouvenir = result.data.getSouvenir;
                    that.checkStatus();
                  }
                } else {
                  if (result.msg) {
                    alert("code:" + result.code + ",msg:" + result.msg);
                  } else {
                    alert("code:" + result.code);
                  }
                }
              })
              .catch(function (e) {

              });
          }

        }
      }
    }
  }
</script>
<style scoped>
  .background{
    position: relative;
  }
  .big_img{
    width: 3.75rem;
    height: 9.52rem;
    background-size: 3.75rem 9.52rem;
    background-image: url('//9i.dvmama.com/free/2017/09/30/%E6%BB%A1399%E9%80%81%E5%A4%A7V%E4%B8%89%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E5%93%8101%E8%83%8C%E6%99%AF.png');
  }
  .big_img2{
    width: 3.75rem;
    height: 12.11rem;
    background-size: 3.75rem 12.11rem;
    background-image: url('//9i.dvmama.com/free/2017/09/30/%E6%BB%A1399%E9%80%81%E5%A4%A7V%E4%B8%89%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E5%93%8102%E8%83%8C%E6%99%AF.png');
  }
  .big_img3{
    height: 12.4rem;
    width: 100%;
    background-size: 3.75rem 12.4rem;
    background-image: url('//9i.dvmama.com/free/2017/09/30/%E6%BB%A1399%E9%80%81%E5%A4%A7V%E4%B8%89%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E5%93%8103%E8%83%8C%E6%99%AF.png');
  }
  .nologin{
    color:#F00026;
    font-size: 0.2rem;
    text-align: center;
    position: absolute;
    top: 3.74rem;
    width: 100%;
    font-weight: 500;
  }
  .btn1{ /*立即登录*/
    width: 2.5rem;
    height: 0.45rem;
    top: 4.28rem;
    left: 0.64rem;
    background-image: url('//9i.dvmama.com/free/2017/09/30/btn_login.png');
    background-size: 2.5rem 0.45rem;
    position: absolute;
    color:#FFFFFF;
    font-size: 0.16rem;
    line-height: 0.45rem;
    background-repeat: no-repeat;
    font-weight: 500;
    letter-spacing: 3px;
    text-indent: 0.73rem;

  }
  .btn_all{ /*查看更多优惠活动*/
    width: 2.5rem;
    height: 0.45rem;
    background-image: url('//9i.dvmama.com/free/2017/09/30/btn_buy.png');
    background-size: 2.5rem 0.45rem;
    position: absolute;
    top: 7.28rem;
    left: 0.63rem;
    color:#FFFFFF;
    font-size: 0.16rem;
    line-height: 0.45rem;
    background-repeat: no-repeat;
    font-weight: 500;
    text-indent: 0.73rem;
    letter-spacing: 1px;
  }
  .rute1{
    position: absolute;
    bottom: 0.4rem;
    width: 3.45rem;
    height: 3.21rem;
    left: 0.15rem;
  }
  .rute1>div{
    color:#FFFFFF;
    font-size: 0.14rem;
    line-height:0.2rem;
  }
  .line{
    display: inline-block;
    width: 0.3rem;
    height: 1px;
    background: #FFFFFF;
    vertical-align: middle;
    margin-top: -0.02rem;
  }
  .goods{
    width: 2.63rem;
    height: 1.12rem;
    border-radius: 12px;
    position: absolute;
    left: 0.56rem;
    top: 5.9rem;
    font-size: 0;
    box-sizing: border-box;
    margin-left: 1px;
    margin-top: 1px;
  }
  .bg{
    width: 2.63rem;
    height: 1.12rem;
    border: 1px dashed #FF4A7D;
    border-radius: 12px;
    position: absolute;
    left: 0.56rem;
    top: 5.9rem;
    box-sizing: border-box;
    background: #ffffff;
    opacity:0.5 ;
  }
  .goods>div{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }
  .goods img{
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 12px 0 0 12px;
    box-sizing: border-box;
  }
  .noshop{
    position: absolute;
    top: 4.68rem;
    color:#F00026;
    font-size: 0.2rem;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
  .goshop{
    color:#F00026;
    font-size: 0.15rem;
    width: 100%;
    text-align: center;
    top: 5.05rem;
    position: absolute;
    font-weight: 500;
  }
  .range{
    position: absolute;
    top: 3.55rem;
    display: inline-block;
    width: 2.73rem;
    left: 0.49rem;
  }
  .date,.circle,.state{
    font-size: 0;
    margin-bottom: 0.1rem;
  }
  .date>div,.circle>div,.state>div{
    display: inline-block;
    vertical-align: top;
  }
  .date>div,.state>div{
    font-weight: 500;
  }
  .circle>div>img{
    width: 0.91rem;
    height: 0.15rem;
  }
  .default{
    font-size: 0.14rem;
    width: 0.91rem;
    text-align: center;
  }
  .default2{
    font-size: 0.12rem;
    width: 0.91rem;
    text-align: center;
  }
  .readyshop_date{
    color:#FFF7AB;
   }
  .noshop_date{
    color:#FFFFFF;
  }
  .state{
    margin-bottom: 0;
  }
  .only{
    width: 1.65rem;
    height: 0.3rem;
    background: #FFD997;
    font-size: 0.12rem;
    color:#F00026;
    line-height: 0.3rem;
    text-align: center;
    margin: 0 auto;
    border-radius: 100px;
    position: absolute;
    top: 5.38rem;
    left: 1.05rem;
  }
  .class2{
    top: 5rem;
  }
  .class3{
    top: 5.5rem;
  }
  .desc{
    position: absolute;
    width: 3.1rem;
    text-align: center;
    margin: 0 auto;
    top: 6.8rem;
    left: 0.325rem;
    font-size: 0.11rem;
    color:#F00026;
    line-height:0.16rem;
  }
  .souvenir{
    font-size: 0.16rem;
    color:#333333;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  .souvenir_detail{
    font-size: 0.12rem;
    color:#FF4A7D;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  .title_text{
    position: absolute;
    text-align: center;
    width:100%;
    font-size: 0.2rem;
    color:#FFFFFF;
  }
  .tit{
    text-shadow: 0 1px 3px #B6001E;
    font-weight: 900;
  }
</style>
