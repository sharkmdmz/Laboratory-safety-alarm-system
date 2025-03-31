const app = getApp();
Page({
  data: {
    cameraName: [], //所有摄像头的名字
    index: 0, //选择的摄像头的索引（从0开始）
    videoSrc: "摄像头实时视频地址",
    imageSrc: "吸烟行为图片地址",
    check: true, //是否检测的条件
    faceCount: 1, //人脸数目
    saveTime: "", //图片保存时间
    warn: "否", //是否警报
  },
  //获取当前时间
  getCurrentTime: function (date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // 补零函数
    const addZero = (n) => (n < 10 ? "0" + n : n);
    return `${year}-${addZero(month)}-${addZero(day)} ${addZero(
      hour
    )}:${addZero(minute)}`;
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
      url: 'url',                 //post请求的地址
      method:'POST',
      data:{
        check:true,
        index:this.data.index.toString()
      },
    });
  },
  //开始检测
  startCheck: function(){
    this.setData({
      check:true,
      videoSrc:''                 //填video的地址
    });
    wx.request({
      url: 'url',                 //post请求的地址
      method:'POST',
      data:{
        check:true,
        index:this.data.index.toString()
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
            faceCount: res.data.eeeeeeee,          //这里填写对应人脸数目的位置
            index:Number(res.data.eee),//填摄像头索引
            check:res.data.check,
            videoSrc:res.eee,          //填对应video的位置
            imageSrc:res.eee           //填image的位置
          });
          if (this.imageSrc !== "") {
            const date = new Date();
            const time = this.getCurrentTime(date);
            this.setData({
              saveTime: time,
            });
          }
        }
      });
      setTimeout(() => {
        this.check(a);
      }, 400000);
    }
  },
  // 停止检测
  stopCheck: function () {
    wx.request({
      url: "url",
      method: "POST",
      data: {
        check: false,
      },
    });
    this.setData({
      faceCount: 0,
      saveTime: "",
      check: false,
      imageSrc: "",
    });
  },
  //停止检测
  stopCheck:function(){
    wx.request({
      url: 'url',                                   //停止检测时post请求的地址
      method:'POST',
      data:{
        check: false,
        index: this.data.index.toString(),
      }
   })
    this.setData({
      faceCount:0,
      warn:'',
      check:false
    })
  },
  // 点击“打开文件夹”按钮的处理函数，跳转到save页面
  openFolder: function () {
    if (this.data.imageSrc) {
      wx.navigateTo({
        url: `/pages/save/save?imageSrc=${this.data.imageSrc}&saveTime=${this.data.saveTime}`,
      });
    } else {
      wx.showToast({
        title: "没有可保存的图片",
        icon: "none",
      });
    }
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
    // this.warning();
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
