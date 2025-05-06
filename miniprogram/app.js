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
        traceUser:true,
        force: true, // 强制重新初始化
      })
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

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

    try {
      const IP = wx.getStorageSync('IP_end');
      if (IP) {
        this.globalData.IP = IP;
      }
    } catch (error) {
      console.error('读取本地存储失败', error);
    }
  },
  globalData: {
    userInfo: null,
    timer:null,
    timer2:null,
    smoke_threshold: 0.50,
    people_threshold: 10,
    // cameraName:[]
    back_end_data:null,
    IP: "192.168.192.191"
  },
})
