<template>
<div class="good_introduce_con">
  <div class="good_introduce">

    <!--六一活动-->
    <!--  <div v-if = "isshowa" class = "partys">
        <a href="/t-12091.html?dp=goods_detail_618">618年中会员狂欢省钱攻略来袭>></a>
      </div>
      <div v-if = "isshowb" class = "partys">
        <a href="/t-12091.html?dp=goods_detail_618">618年中会员狂欢！领取45元红包>></a>
      </div> -->
    <!--价钱-->
    <div class="clearfix introPrice">
      <div style="display: none">{{ membercont }}</div>
      <div v-if="infoobj.price">
        <section v-if="otheract.isStacks">
          <span class="memPrice"><span class = "font14">¥ </span>{{ infoobj.price.marketPrice }}</span>
        </section>
        <section v-else>
          <span class="memPrice"><span class = "font14">¥ </span>{{ memPrice }}</span><span class="originPrice">¥{{ infoobj.price.marketPrice }}</span>
          <div class="commission memBack comissionInline" v-if="visitorstatus == 3">
            <span v-if="infoobj.price.importTariff != 0" class="member_iconCont"><span class = "question_ico question_icon_m" @click = "showTags('middle')"></span></span>
            <span class="f12" v-if="infoobj.price.memberGoods == '0'">会员返：¥ {{ infoobj.price.sellerIncome }}</span>
            <span class="memColor f12" v-else>分享奖励：¥ {{ infoobj.price.normalIncome }}</span>
            <span class="sellerTiems" v-if="infoobj.price.activityRatio != 0">
                <span class = "inlinem f12">*</span>{{ infoobj.price.activityRatio }}倍</span>
            <span class="member_iconCont" @click="showMember('middle')">
                <span v-if = "infoobj.price.memberGoods == '0'" class = "question_ico"></span>
                <span v-if="infoobj.labelTag && infoobj.labelTag.length">
                  <span v-for = "(item, index) of infoobj.labelTag" :key="index" class = "labelList">
                    <span v-if = "item.goodsLabel != ''" class = "tags f12">{{ item.goodsLabel }}</span>
                  </span>
                </span>
            </span>
          </div>
          <div class="commission memBack comissionInline" v-else>
            <span v-if="infoobj.price.importTariff != 0" class="member_iconCont"><span class = "question_ico question_icon_m" @click = "showTags('middle')"></span></span>
            <span v-if="infoobj.labelTag && infoobj.labelTag.length">
                <span v-for = "(item, index) of infoobj.labelTag" :key="index" class = "labelList">
                  <span v-if = "item.goodsLabel != ''" class = "tags f12">{{ item.goodsLabel }}</span>
            </span>
            </span>
          </div>
        </section>
      </div>
    </div>
    <!--预付定金-->
    <div v-if="!otheract.isStacks">
      <!-- 预定商品  -->
      <div v-if="infoobj.presale" class="presale">
        <div class="pre_list">定金：<span class="pre_de_f12">¥ </span><span class="pre_deposit_num">{{ infoobj.price.advancePrice }}</span><span class="pre_deducte">定金可抵扣 ¥ {{ infoobj.price.discountPrice }}</span></div>
        <div class="pre_list">尾款：<span class="pre_final_f12">¥ </span><span class="pre_final_num">{{ infoobj.price.endPrice }}</span>&nbsp;<span class="pre_final_num" v-if="visitorstatus == '3'">(支付尾款再返现6.18元)</span></div>
        <div class="pre_list">尾款支付时间：{{ changeDate(infoobj.presale.begPayTime) }} - {{ changeDate(infoobj.presale.endPayTime) }}</div>
        <div class="pre_list">流程：1.付定金 - 2.付尾款 - 3.发货 <span class="presale_icon" @click="handlePreRule"></span></div>
      </div>

      <!--预告开始-->
      <div class="limitBuy" v-if="visitorstatus == '3' && infoobj.isComingActivity">
        <span class="limitBuy_icon"></span>
        <span class="limitBuy_tips">{{ infoobj.comingBegTime }}正式开抢，会员返<span class = "rColor"> ¥ {{ infoobj.comingActIncome }}</span></span>
      </div>
      <!-- 限时购预告 -->
      <div class="limitBuy" v-if="visitorstatus == '3' && !isOver && isshowactive == '1' && singleactivity && singleactivity.typeId == 8">
        <span class="limitBuy_icon"></span>
        <span class="limitBuy_tips">{{ infoobj.comingBegTime }}还剩 <span v-if = "Number(remainTime.day) != 0">{{ remainTime.day }}天</span>{{ remainTime.hour }}:{{ remainTime.minute }}:{{ remainTime.second }} 会员返恢复为<span class="rColor"> ¥ {{ infoobj.price.normalIncome }}</span></span>
      </div>
      <!-- 销售奖 -->
      <div @click = "handleReward(saleactivity)" class = "saleAward" v-if="visitorstatus == '3' && !isSaleOver && saleactivity && saleactivity.isShowTime == '1'">
        <span class="saleAward_icon"></span>
        <span class="saleAward_tips">距结束<span v-if = "Number(salereWard.day) != 0">{{ salereWard.day }}天</span>{{ salereWard.hour }}:{{ salereWard.minute }}:{{ remainTime.second }} {{ saleactivity.item.actIntro }}</span>
      </div>
      <!--10.18爆品预约提醒-->
      <div class="bao-pin-1018-tip" v-if="response && response.data && response.data.explosion && response.data.explosion.price">
        <span class="act-symbol">¥ </span><span class="act-price">{{response.data.explosion.price}}</span><span class="start-time">{{date.format(response.data.explosion.sTime + '000', 'MM月dd日hh:mm')}} 正式开抢</span>
      </div>
    </div>
    <!--新增分类属性及卖点-->
    <div class="type-box">
      <!--标签-->
      <span class="type-style" v-for="item in goodsparamobj"><span class="type-style-box" v-if="item.isShowTag == 1"><i>{{item.attrInfo}}</i></span></span>
      <!--卖点-->
      <!--<span class="selling-point" v-if="goodsdatabasis.sellingPoint">【{{goodsdatabasis.sellingPoint}}】</span>-->
      <!-- 商品名 -->
      <span class = "goods_name">{{ goodsname }}</span>
    </div>

    <!--原描述语推荐-->
    <div class="shareRecommend" @click="debug.goDeveloperPage();">{{goodsdatabasis.shareRecommend}}</div>
    <!--库存-->
    <div class="salesCount clearfix" v-if="!otheract.isStacks&&!isbiggift">
      <span class="goodsStock"><span v-if = "seckill">秒杀库存</span><span v-else><span v-if = "infoobj.isActivity">活动剩余库存</span><span v-else>库存</span></span> {{ goodsstocknumber }}</span>
      <!--分割线-->
      <span class="split-lr"></span>
      <span class="already_sale"><span v-if = "infoobj.presale">已预定</span><span v-else>已售</span> {{ infoobj.salesNumber }}</span>
    </div>
  </div>
  <!--库存不足-->
  <div class="stock_tips_wrapper" v-if="!isbiggift">
    <span class="stock_tips">库存不多了，要买尽快哦</span>
  </div>

  <div class="tax_cont">
    <div @click="handleMaskTask" style="display: none;" class="weui-mask"></div>
    <div class="weui-dialog">
      <p class="dialog-title">
        <!--价格详情-->
        {{ confirmTitle }}
      </p>
      <p class="dialog-content" :class="{ alignLeft: isMemContent }">
        <!--本商品含税{{ infoobj.price.importTariff }}元-->
        {{ confirmText }}
      </p>
      <span class="vux-close tax-close" @click="handleCloseTag"><span class = "taxBtn"></span></span>
    </div>
  </div>
</div>
</template>

<script>
import GoodsIntro from "./goods_intro.es6";
export default GoodsIntro;
</script>
