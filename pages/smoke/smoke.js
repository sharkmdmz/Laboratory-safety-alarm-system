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
        index: e.detail.value,
      });
      if (this.data.check) {
        this.check(this.data.index);
      }
    }
  },
  //开始检测
  startCheck: function () {
    this.setData({
      check: true,
    });
    this.check(this.data.index);
  },

  check: function (a) {
    if (a === this.data.index && this.data.check) {
      wx.request({
        url: "http://192.168.184.191:5000/get_people_status", //post请求的地址
        method: "POST",
        data: {
          check: true,
          index: this.data.index,
        },
      });
      wx.request({
        url: "http://192.168.184.191:5000/get_people_status", //get请求的地址
        method: "GET",
        success: (res) => {
          console.log(res);
          this.setData({
            faceCount: res.eeeeeee, //这里填写对应人脸数目的位置
            videoSrc: res.eeeeeeeeee, //这里填写对应video的位置
            imageSrc: res.eeeeeeeeee, //这里填写对应image的位置
          });
          if (this.imageSrc !== "") {
            const date = new Date();
            const time = this.getCurrentTime(date);
            this.setData({
              saveTime: time,
            });
          }
        },
      });
      // 每隔4s调用一次check函数
      setTimeout(() => {
        this.check(a);
      }, 4000);
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
  // 页面加载时获取所有摄像头的名字，并判断是否开始检测
  onLoad: function (options) {
    this.setData({
      cameraName: app.globalData.cameraName,
    });
    if (this.data.check) {
      this.check(this.data.index);
    }
  },
});
