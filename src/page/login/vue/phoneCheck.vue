<template>
  <div class="wrap">
      <header class="title">手机验证</header>
      <p class="sub-title">请输入手机号，登录或注册您的大V店账号</p>
      <div class="input-box">
        <input type="tel" placeholder="请输入手机号" class="phone" v-model.trim="phone" @focus="$emit('hide-tip')" @blur="$emit('show-tip')">
        <transition name="fade">
          <img class="clear-value" src="//9i.dvmama.com/free/2018/04/14/clearInput.png" alt="" v-show="phone.length" @click="phone=''">
        </transition>
      </div>
      <div class="input-box">
          <input type="number" placeholder="请输入验证码" class="code" v-model.trim="code" @focus="$emit('hide-tip')" @blur="$emit('show-tip')">
          <div id="codeBtn" class="btn code-btn" :class="{'disabled':!phone.length}" @click="getCode(1)">{{codeText}}</div>
      </div>
      <p class="code-tip"><span @click="getCode(2)">短信收不到？试试语音验证</span></p>
      <div id="loginBtn" class="btn login-btn" :class="{'disabled':!loginFlag}" @click="login">立即登录</div>
      <span class="login-type" @click="$emit('set-login-type',2)">使用账号密码登录</span>
  </div>
</template>
<script>
import $ from 'jquery';
import popup from 'dvd-service-js-popup';
import encrypt from 'dvd-service-js-encrypt';
import param from 'dvd-base-js-param';
import ua from 'dvd-base-js-ua';
export default {
  data() {
    return {
      phone:'',
      code:'',
      codeText:'获取验证码',
      timer:null,
      time: 60,
      refererName:''
    };
  },
  computed:{
    loginFlag() {
      return this.phone && this.code.length >= 4;
    },
    referer: function() {
      return unescape(param.get('referer'));
    },
    hname: function() {
      return location.hostname.split('.')[0];
    },
    origin: function() {
      return location.origin;
    }
  },
  methods:{

    /** @augments
     * type 1 文字 2 语音
     */
    getCode(type) {
      const that = this;
      if (this.time !== 60) {
        return false;
      }
      if (this.phone.length < 11) {
        popup.toast('请输入正确的手机号码');
        return false;
      }
      $.post('/api/mg/auth/user/sendSms', encrypt.ajax({
        mobile:that.phone,
        smsType:type,
        sendType:1
      }), res => {
        if (res.code) {
          popup.toast(res.msg || res.data.msg);
          return false;
        } else {
          popup.toast('发送成功');
          this.checkCodeBtn();
        }
      });
    },
    checkCodeBtn() {
      const codeBtn = $('#codeBtn');
      codeBtn.addClass('disabled');
      this.timer = setInterval(() => {
        this.codeText = `${--this.time}秒后重新发送`;
        if (this.time <= 0) {
          this.time = 60;
          this.codeText = '重新获取验证码';
          clearInterval(this.timer);
          codeBtn.removeClass('disabled');
        }
      }, 1000);
    },
    login() {
      const loginBtn = $('#loginBtn'),
        that = this;
      if (loginBtn.hasClass('disabled')) {
        return false;
      }
      that.getRefererName();
      $.post('/api/mg/auth/user/login', encrypt.ajax({
        mobile:that.phone,
        captcha:that.code,
        referer:that.refererName
      }), res => {
        if (res.code) {
          popup.toast(res.msg || res.data.msg);
          return false;
        } else {
          if ((that.hname === 'bravetime' || ua.isDvdApp()) && res.visitor_status !== 3) {

            /* 登录成功后跳转到refer页*/
            if (that.referer) {
              location.replace(that.referer.replace(that.origin, res.shop_url));
            } else {
              location.replace(res.shop_url);
            }
          } else {
            location.replace(that.referer || '/');
          }
        }
      });
    },
    getRefererName() {
      if(this.referer.split('/')[3]){
        this.refererName = this.referer.split('/')[3];
      }else{
        this.refererName = '';
      }
    }
  }
};
</script>

