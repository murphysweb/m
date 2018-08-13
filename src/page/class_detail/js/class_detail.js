// 基础模块
require('dvd-service-js-common');

// 第三方模块
import Vue from 'vue';
import $ from 'jquery';
import Cookies from 'js-cookie';

// 业务模块
import tj from 'dvd-service-js-tj';
import util from 'dvd-service-js-util';
import date from 'dvd-base-js-date';
import param from 'dvd-base-js-param';
import popup from 'dvd-service-js-popup';
import login from 'dvd-service-js-login';
import share from 'dvd-service-js-share';
import native from 'dvd-service-js-native';
import encrypt from 'dvd-service-js-encrypt';
import localCache from 'dvd-base-js-cache';
import vueLazyload from 'dvd-service-js-img-lazyload';
import ua from 'dvd-base-js-ua';
// 懒加载初始化
vueLazyload.init();

// 渲染页面
new Vue({
  el: '.app',
  components: {
    'dvd-service-com-go-page-top': require('dvd-service-com-go-page-top').default,
    'dvd-service-com-go-home': require('dvd-service-com-go-home').default,
    'class-detail': require('../vue/class_detail.vue').default
  },
  data() {
    return {
      response: null,
      ua:ua
    };
  },
  computed: {},
  watch: {
    // 监听response变化
    response(){
      // response变化后并渲染完dom,设置其他事项
      this.$nextTick(function () {
        let that = this;
        // 设置分享信息
        try {
          if (!that.response || !that.response.data) return;
          window.shareTitle = that.response.data.shareTitle;
          window.shareDesc = that.response.data.shareDesc;
          window.window.shareImg = that.response.data.shareImg;
          share.setShareInfo({
            title: window.shareTitle||that.response.data.shareTitle,
            desc: window.shareDesc||that.response.data.shareDesc,
            link: window.link||location.href,
            imgUrl: window.shareImg||that.response.data.shareImg
          }, that.response);
        } catch (err) {
          console.error(err);
        }
      });
    },
  },
  beforeCreate() {
  },
  created() {
    // this.getData();
  },
  mounted() {
  },
  filters: {},
  methods: {
    /**
     * 接口名称:
     * 接口文档:
     */
    getData() {
      let that = this;
      $.ajax({
        cache: false,
        async: true,
        url: '?_=' + Date.now(),
        type: 'post',
        dataType: 'json',
        data: encrypt.ajax({
          js_wx_info: 1,
        }),
        success(response) {
          try {
            that.response = response;
          } catch (err) {
            // 这个try-catch不要去掉，因为有异常时会阻止强制跳转
          }
        },
        error(error) {
          console.error(`ajax已执行error回调方法: url=${this.url}, reason=${error.status} ${error.statusText} `);
          this.success(require('../json/class_detail.json'));
          console.warn(`ajax已使用mock数据: url=${this.url}, mock=class_detail.json`);
        }
      });
    },
  },
});
