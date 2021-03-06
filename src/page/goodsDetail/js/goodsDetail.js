// 基础模块
import common from 'dvd-service-js-common';

// 第三方模块
import Vue from 'vue';

// 业务模块
import goodsDetail from '../vue/goods_detail.vue';
import login from 'dvd-service-js-login';
import native from 'dvd-service-js-native';

// 加入购物车和购买异步请求地址
window.cartURL = 'cart.html?rp=goods_detail&rl=cart'; // 购物车
window.buyURL = 'checkout.html?rp=goods_detail&rl=checkout'; // 立即购买跳转订单确认页
window.secURL = 'cart.html?logRefererPage=goods_detail&logRefererLocation=add'; // 秒杀跳转购物车
window.addURL = 'index.php?m=default&c=cart&a=add_to_cart&rp=goods_detail&rl=add'; // 加入购物车
// 收藏URL
window.collectURL = "index.php?c=goods&a=make_collect_goods";
// 商品详情URL
window.detailURL = "/api/mg/good/info/detail";
// 猜你喜欢URL
window.mayYouLikeURL = "/api/mg/good/info/guess";

// window.iosInterface.getAudioState=function (obj) {
//   for(var i = 0;i<window.vm.$children[0].$children.length;i++) {
//     if(window.vm.$children[0].$children[i].componentName=='goods_swipter') {
//       window.vm.$children[0].$children[i].playState = obj.state;
//       window.vm.$children[0].$children[i].getState();
//     }
//   }
// };
window.iosInterface.getAudioState=function (obj) {
  for(var i = 0;i<window.vm.$children[0].$children.length;i++) {
    if(window.vm.$children[0].$children[i].componentName=='goods_swipter') {
      window.vm.$children[0].$children[i].playState = obj.state;
      window.vm.$children[0].$children[i].getState();
    }
  }
};
if(!window.result){
  window.result = function(){};
}
window.logined = login.isLogined();
require('./goods_detail_data.js');

// 设置app头部标题栏
native.custom.initHead({
  showHead: 1,     // 是否展示头部
  showFoot: 0,     // 是否展示底部
  backOnHead: 1,   // 头部返回按钮
  homeOnHead: 1,   // 头部首页按钮
  shareOnHead: 1,
  isAudioAbsorb: 1,
  isShowAudio: 1
});

window.vm = new Vue({
  el: "#goodsDetail",
  data: {
    eventHub: new Vue()
  },
  components: {
    goodsDetail: goodsDetail,
  }
});
