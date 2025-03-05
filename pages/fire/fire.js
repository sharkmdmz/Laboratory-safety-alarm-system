const app = getApp();
Page({
  data: {
    cameraName: [],               //所有摄像头的名字
    index: 0,                     //选择的摄像头的索引（从0开始）
    videoSrc: '摄像头实时视频地址',
    check: true,                  //是否检测的条件
    threshold: 0.35,              //阈值
    thresholdTemp: 0.34,          //临时阈值
    confidenceLevel: 0.01,        //置信度
    warn: '否'                    //是否警报
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
    }
  },
//开始检测
  startCheck: function(){
    this.setData({
      check:true
    });
    this.check(this.data.index);
  },

  check: function (a) {
    if (a === this.data.index && this.data.check) {
      wx.request({
        url: 'http://192.168.184.191:5000/get_people_status',                 //post请求的地址
        method:'POST',
        data:{
          check:true,
          index:this.data.index.toString()
        },
      });
      wx.request({
        url: 'http://192.168.184.191:5000/get_people_status',                 //get请求的地址
        method: 'GET',
        success: (res) => {
          console.log(res);
          this.setData({
            confidenceLevel: res.eeeeeee,          //这里填写对应置信度的位置
            videoSrc:res.eeeeeeeeee                //这里填写对应image的位置
          });
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
          }
        },
        fail:(res)=>{
          console.log(res,111);
        },
        complete:(res)=>{
          console.log(res,222);
        }
      });
      //每隔4s调用一次check函数
      // setTimeout(() => {
      //   this.check(a);
      // }, 4000);
    }
  },
//停止检测
stopCheck:function(){
  wx.request({
    url: 'url',                                   //停止检测时post请求的地址
    method:'POST',
    data:{
      check: false
    }
  })
  this.setData({
    confidenceLevel:0.00,
    warn:'',
    check:false
  })
},
//页面加载时获取所有摄像头的名字，并判断是否开始检测
  onLoad: function (options) {
    this.setData({
      cameraName: app.globalData.cameraName
    });
    if (this.data.check) {wx.request({
      url: 'url',
    })
      this.check(this.data.index);
    }
  },
});