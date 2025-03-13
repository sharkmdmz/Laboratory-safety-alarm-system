const app = getApp();
Page({
  data: {
    cameraName: [],               //所有摄像头的名字
    index: 0,                     //选择的摄像头的索引（从0开始）
    videoSrc: 'http://192.168.184.191:5000/smoke_video_feed',
    check: true,                  //是否检测的条件
    threshold: 0.3,              //阈值
    thresholdTemp: 0.3,          //临时阈值
    confidenceLevel: 0.01,        //置信度
    warn: '是'                    //是否警报
  },
//临时阈值的加减
  addThresholdTemp: function () {
    if (this.data.thresholdTemp < 1) {
      this.setData({
        thresholdTemp: parseFloat((this.data.thresholdTemp + 0.01).toFixed(2))
      })
    }
  },
  minusThresholdTemp: function () {
    if (this.data.thresholdTemp > 0) {
      this.setData({
        thresholdTemp: parseFloat((this.data.thresholdTemp - 0.01).toFixed(2))
      })
    }
  },
//修改阈值
  setThreshold: function () {
    this.setData({
      threshold: this.data.thresholdTemp
    });
    wx.request({
      url: 'http://192.168.184.191:5000/get_smoke_status',
      method : "POST",
      data:{
        threshold:this.data.threshold,
        // smoke_camera:this.data.index.toString(),
        smoke_camera:'2',
        check:this.data.check
      }
    })
  },
//改变摄像头时触发
  pickerChange: function (e) {
    console.log(e);
    if (e.detail.value !== this.data.index) {
      this.setData({
        index: e.detail.value
      });
      if (this.data.check) {
        this.check(this.data.index);
      }
    };
    wx.request({
      url: 'http://192.168.184.191:5000/get_smoke_status',                 //post请求的地址
      method:'POST',
      data:{
        check:true,
        smoke_camera:this.data.index.toString(),
        threshold:this.data.threshold
      },
    });
  },
//开始检测
  startCheck: function(){
    this.setData({
      check:true,
      videoSrc:'http://192.168.184.191:5000/smoke_video_feed'
    });
    wx.request({
      url: 'http://192.168.184.191:5000/get_smoke_status',                 //post请求的地址
      method:'POST',
      data:{
        check:true,
        smoke_camera:this.data.index.toString(),
        threshold:this.data.threshold
      },
    });
    this.check(this.data.index);
    this.onRefresh();
  },

  check: function (a) {
    if (a === this.data.index && this.data.check) {
      wx.request({
        url: 'http://192.168.184.191:5000/get_smoke_status',                 //get请求的地址
        method: 'GET',
        success: (res) => {
          console.log(res,123);
          this.setData({
            confidenceLevel: res.data.max_conf,          //这里填写对应置信度的位置
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
      url: 'http://192.168.184.191:5000/get_smoke_status',                                   //停止检测时post请求的地址
      method:'POST',
      data:{
        check: false,
        smoke_camera: this.data.index.toString(),
        threshold: this.data.threshold
      }
    })
    this.setData({
    confidenceLevel:0.00,
    warn:'',
    check:false
    })
  },

  warning:function(){
    //若阈值小于等于置信度，则弹窗提醒
    if (this.data.threshold <= this.data.confidenceLevel) {
      this.setData({
        warn: '是'
      });
      wx.showToast({
        title: '有火灾风险',
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