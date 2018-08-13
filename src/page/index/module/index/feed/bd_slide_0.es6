import layout from "../layout.es6"
import lazyload from 'dvd-service-js-img-lazyload';

export default {
  props: ['data'],
  data(){
    return {
      msg: {},
      dataList: {},
      mySwiper: '1',
      lazyload,
      firstPicLoadedTimes: 0,
    }
  },
  computed: {
    dataList: function () {
      console.log(this.data, '222222')
      return this.data || []
    }
  },
  created: function () {
    let scope = this;
    this.$nextTick(function () {

      // $("img[data-original]").lazyload({effect: "fadeIn", threshold: 500, failure_limit: 10, skip_invisible : false});
    })
  },
  components: {},
  mounted() {
  },
  methods: {
    imgObject: function (imgSrc) {
      return {
        src: imgSrc || '//pic.davdian.com/free/2016/12/28/519_360_fdc5daf1d2eab033a50af9f80246da60.png',
        error: '//pic.davdian.com/free/2016/12/28/519_360_fdc5daf1d2eab033a50af9f80246da60.png',
        loading: '//pic.davdian.com/free/2016/12/28/519_360_fdc5daf1d2eab033a50af9f80246da60.png'
      }
    },
    clickAnalysis: function (e) {
      layout.clickAnalysis(e, this, 'body');
    },
    initSwiper() {
      this.firstPicLoadedTimes ++;
      if(this.firstPicLoadedTimes === 2) {
        // debugger
        let scope = this;
        if (scope.data.body.dataList.length > 1) {
          scope.mySwiper = new Swiper('.bd_slide_0', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: true,
            preloadImages: false,
            lazyLoading: true
          })
        }
      }
    },
  }
}
