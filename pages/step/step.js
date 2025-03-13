const app = getApp();
Page({
  data: {
    cameraName: [],               //所有摄像头的名字
    index: 0,                     //选择的摄像头的索引（从0开始）
    videoSrc: '摄像头实时视频地址',
    check: true,                  //是否检测的条件
    threshold: 20,              //阈值
    thresholdTemp: 20,          //临时阈值
    peopleCount: 1,              //当前人数
    warn: '否'                    //是否警报
  },
  //临时阈值的加减
  addThresholdTemp: function () {
      this.setData({
        thresholdTemp: this.data.thresholdTemp + 1
      })
  },
  minusThresholdTemp: function () {
    if (this.data.thresholdTemp > 0) {
      this.setData({
        thresholdTemp: this.data.thresholdTemp - 1
      })
    }
  },
  //修改阈值
  setThreshold: function () {
    this.setData({
      threshold: this.data.thresholdTemp
    })
  },
  //开始检测
  startCheck: function(){
    this.setData({
      check:true,
      videoSrc:'url'                  //填video的地址
    });
    wx.request({
      url: 'url',                 //post请求的地址
      method:'POST',
      data:{
        check:true,
        index:this.data.index.toString(),
        threshold:this.data.threshold
      },
    });
    this.check(this.data.index);
    this.onRefresh();
  },

  check: function (a) {
    if (a === this.data.index && this.data.check) {
      wx.request({
        url: 'url',                 //get请求的地址
        method: 'GET',
        success: (res) => {
          console.log(res,123);
          this.setData({
            peopleCount: res.data.eeeeeeee,          //这里填写对应置信度的位置
            threshold: res.data.threshold,
            thresholdTemp: res.data.threshold,
            index:Number(res.data.smoke_camera),
            check:res.data.check
            // videoSrc:res.eeeeeeeeee                //这里填写对应image的位置
          });
        }
      });
      setTimeout(() => {
        this.check(a);
      }, 400000);
    }
  },
  //停止检测
  stopCheck:function(){
    wx.request({
      url: 'url',                                   //停止检测时post请求的地址
      method:'POST',
      data:{
        check: false,
        smoke_camera: this.data.index.toString(),
        threshold: this.data.threshold
      }
   })
    this.setData({
      peopleCount:0,
      warn:'',
      check:false
    })
  },

  warning:function(){
    //若阈值小于等于置信度，则弹窗提醒
    if (this.data.threshold <= this.data.peopleCount) {
      this.setData({
        warn: '是'
      });
      wx.showToast({
        title: '有踩踏风险',
        icon: 'error'
      })
    } else {
      this.setData({
        warn: '否'
      })
    };
    setTimeout(() => {
      this.warning();
    }, 400);
  },
  //页面加载时获取所有摄像头的名字，并判断是否开始检测
  onLoad: function (options) {
    this.setData({
      cameraName: app.globalData.cameraName
    });
    if (this.data.check) {
      wx.request({
        url: 'url',
      });
      this.check(this.data.index);
    };
    this.warning();
  },
  //刷新页面
  onRefresh(){
    const pages = getCurrentPages();
    const currentRoute = pages[pages.length - 1].route;
    wx.redirectTo({
      url: '/' + currentRoute,
    })
  }
});