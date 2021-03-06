// 基础模块
import common from 'dvd-service-js-common';
import Vue from 'vue';
// 业务模块
import encrypt from 'dvd-service-js-encrypt';
import tj from 'dvd-service-js-tj';
import popup from 'dvd-service-js-popup';
import login from 'dvd-service-js-login';
import native from 'dvd-service-js-native';
import ua from 'dvd-base-js-ua';
import $ from 'jquery';
// 第三方模块

// 渲染页面
new Vue({
  el: ".app",
  components: {
    'com-top-title': require('dvd-service-com-title').default,
    'com-picker-address': require('../../../component/com-picker-address.vue').default
  },
  data() {
    return {
      response: null,
      show_adviser_hobby_list: true,
      show_adviser_list: false,
      showaddress2: {showaddress: false},
      address: '',
      addressId: [],
      oncesdesc: false,
      hobby: [false, false, false, false, false, false, false, false, false],
      hobbyid: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      bobbyidlist: [],
      adviser_select: 0,
      response2: null,
      inapp: !!navigator.userAgent.match(/davdian|bravetime|vyohui/),
      firsttime: 0 //是否是第一次选定顾问
    }
  },
  computed: {
    hobbyNUm: function () {
      var that = this;
      let nums = 0;
      that.bobbyidlist = [];
      that.hobby.forEach(function (value, index) {
        if (value) {
          nums++;
          Vue.set(that.bobbyidlist, index, that.hobbyid[index]);
        }
      });
      return nums;
    },
    vossion:function () {
      let nowv =  ua.getDvdAppVersion();
      let comper = ua.compareVersion(nowv,'4.1.0');
      if(comper == 1){
        return true;
      }else{
        return false;
      }
    }
  },
  watch: {
    // 监听response变化
    response() {
      // response变化后并渲染完dom,设置其他事项
      this.$nextTick(function () {
        let that = this;
        native.custom.initHead({
          showHead: 1,    // 是否展示头部
          backOnHead: 1,  // 头部返回按钮
          btnText: ""
        });
        // 设置app头部标题栏
        native.Browser.setHead({
          'title': '选择我的顾问',
          'rightBtn': {
            'text': ''
          }
        });
      });
    },
  },
  beforeCreate() {
  },
  created() {
    this.getData();
  },
  mounted() {

  },
  methods: {
    getData: function () {
      let that = this;
      $.ajax({
        cache: false,
        async: true,
        url: '/api/mg/user/adviser/getUserTagInfo?_=' + Date.now(),
        type: 'post',
        dataType: 'json',
        data: encrypt.ajax({}),
        success(response) {
          common.checkRedirect(response);
          that.response = response;
          if (response.code) {
            popup.toast(response.data.msg || response.msg);
          } else {
            /*如果有数据，证明不是第一次选定妈妈顾问*/
            if (response.data && response.data.tags.length) {
              that.firsttime = 0
            } else {
              that.firsttime = 1
            }
            if (response.data.distId) {
              that.oncesdesc = true;
            }
            let tags = response.data.tags;
            if (tags) {
              for (var i = 0; i < tags.length; i++) {
                that.hobby[tags[i].id - 1] = true;
              }
            }
          }
        },
        error(error) {
          popup.toast(error.statusText)
          console.error('ajax error:' + error.status + ' ' + error.statusText);
        }
      });
    },
    getaddress: function (msg) {
      var that = this;
      that.address = msg.name;
      that.addressId = msg.value;
    },
    showadselect: function () {
      var that = this;
      that.showaddress2.showaddress = true;
      that.oncesdesc = true;
    },
    hobbys: function (code) {
      var that = this;
      if (that.hobbyNUm == 2 && !that.hobby[code]) {
        popup.toast("只能选择两个特长");
      } else {
        Vue.set(that.hobby, code, !that.hobby[code]);
      }
    },
    nextstep: function () {
      /*下一步*/
      var that = this;

      let data = {
        "provId": that.addressId[0],
        "cityId": that.addressId[1],
        "distId": that.addressId[2],
        "tags": that.bobbyidlist.filter(function (x) {
          return x
        }).join(',')
      };

      if (!data.distId) {
        popup.toast("请选择所在地区");
        return false;
      }

      if (data.tags == "") {
        popup.toast("请选择标签");
        return false;
      }
      popup.loading();
      $.ajax({
        cache: false,
        async: true,
        url: '/api/mg/user/adviser/getRecommendAdvisers?_=' + Date.now(),
        type: 'post',
        dataType: 'json',
        data: encrypt.ajax(data),
        success(response) {
          common.checkRedirect(response);
          if (response.code) {
            popup.loading(false);
            popup.toast(response.data.msg || response.msg);
          } else {
            popup.loading(false);
            that.response2 = response;
            that.show_adviser_hobby_list = false;
            that.show_adviser_list = true;
          }
        },
        error(error) {
          popup.loading(false);
          popup.toast(error.statusText)
          console.error('ajax error:' + error.status + ' ' + error.statusText);
        }
      });
    },
    confirm_adviser: function () {
      /*选定妈妈顾问*/
      if (!this.adviser_select) {
        popup.toast("您必须要选择一个顾问");
        return false;
      }
      popup.loading();
      var that = this;
      let data = {
        "provId": that.addressId[0],
        "cityId": that.addressId[1],
        "distId": that.addressId[2],
        "tags": that.bobbyidlist.filter(function (x) {
          return x
        }).join(','),
        "adviserId": this.adviser_select
      };
      $.ajax({
        cache: false,
        async: true,
        url: '/api/mg/user/adviser/confirmAdviser?_=' + Date.now(),
        type: 'post',
        dataType: 'json',
        data: encrypt.ajax(data),
        success(response) {
          common.checkRedirect(response);
          if (response.code) {
            popup.loading(false);
            popup.toast(response.data.msg || response.msg);
          } else {
            if (that.inapp) {
              var href = location.href;
              var baseHref;
              if (href.indexOf("davdian.com") > 0) {
                baseHref = "davdian.com";
              } else if (href.indexOf("vyohui.cn") > 0) {
                baseHref = "vyohui.cn"
              } else {
                baseHref = "bravetime.net";
              }
              //先判断版本
              if(that.vossion){
                window.result = function(){};
                /*调起native*/
                location.href = "davdian://call.Account.com?action=refreshUserInfo&callback=result&minv=4.2.0";
                setTimeout(function () {
                  location.replace('/my_adviser.html?firsttime=' + that.firsttime);
                }, 500)
              }else{
                location.replace('/my_adviser.html?firsttime=' + that.firsttime);
              }
            } else {
              location.replace('/my_adviser.html?firsttime=' + that.firsttime);
            }
          }
        },
        error(error) {
          popup.loading(false);
          popup.toast(error.statusText)
          // that.response = require('../json/choose_mama_adviser.json');
          console.error('ajax error:' + error.status + ' ' + error.statusText);
        }
      });
    },
    prestep: function () {
      var that = this;
      that.show_adviser_hobby_list = true;
      that.show_adviser_list = false;
    }
  },
  filters: {},
});

