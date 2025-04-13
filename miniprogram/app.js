// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:"lsas-8gw8pt8p02cb3bd0",
        traceUser:true
      })
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    try {
      const timer = wx.getStorageSync('timer');
      if (timer) {
        this.globalData.timer = timer;
      }
    } catch (error) {
      console.error('读取本地存储失败', error);
    }

    try {
      const smoke_threshold = wx.getStorageSync('smoke_threshold');
      if (smoke_threshold) {
        this.globalData.smoke_threshold = smoke_threshold;
      }
    } catch (error) {
      console.error('读取本地存储失败', error);
    }

    try {
      const people_threshold = wx.getStorageSync('people_threshold');
      if (people_threshold) {
        this.globalData.people_threshold = people_threshold;
      }
    } catch (error) {
      console.error('读取本地存储失败', error);
    }
  },
  globalData: {
    userInfo: null,
    timer:null,
    smoke_threshold: null,
    people_threshold: null,
    cameraName:[]
  },
})
