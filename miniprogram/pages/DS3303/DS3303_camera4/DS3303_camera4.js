const app = getApp();
Page({
  data: {
    videoSrc:"http://192.168.192.191:5000/multi_video_feed",
    fireStatus: '正常',
    fire_cnt: '--',
    fireAlert: false,
    stampedeStatus: '正常',
    stampede_cnt: '--',
    stampedeAlert: false,
    smokingStatus: '正常',
    smoking_cnt: '--',
    smokingAlert: false,
    eatingStatus: '正常',
    eating_cnt: '--',
    eatingAlert: false
  },

  onLoad: function(options) {
    // 初始化视频流
    this.initVideo();
    this.updateMonitorData();
    // 然后每隔5秒执行一次
    this.timer = setInterval(() => {
      this.updateMonitorData();
    }, 5000);
  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } // 页面卸载时清除定时器
  },

  initVideo: function() {
    // 这里应该替换为实际的视频流地址
    const videoContext = wx.createVideoContext('mainVideo');
    // 模拟视频源
    videoContext.src = 'https://example.com/live/DS3303/camera1';
    videoContext.play();
  },

  // connectWebSocket: function() {
  //   // 连接WebSocket获取实时监测数据
  //   const socket = wx.connectSocket({
  //     url: 'wss://your-backend.com/ws',
  //     success: () => {
  //       socket.onMessage((res) => {
  //         const data = JSON.parse(res.data);
  //         this.updateMonitorData(data);
  //       });
  //     }
  //   });
  // },

  updateMonitorData: function() {
    // 更新监测数据
    this.setData({
      fireAlert: app.globalData.back_end_data.multi.smoke_alarm,
      fire_cnt: '最大置信度:' + app.globalData.back_end_data.multi.smoke_max_conf || '--',
      fireStatus: this.data.fireAlert ? '警报' : '正常',
      stampedeAlert: app.globalData.back_end_data.multi.people_alarm,
      stampede_cnt: '当前人数:' + app.globalData.back_end_data.multi.people_cnt[0] || '--',
      stampedeStatus: this.data.stampedeAlert ? '警报' : '正常',
      smokingAlert: app.globalData.back_end_data.multi.cigarrete_alarm,
      smoking_cnt: '吸烟人数:' + app.globalData.back_end_data.multi.face_cnt[0] || '--',
      smokingStatus: this.data.smokingAlert ? '警报' : '正常',
      eatingAlert: app.globalData.back_end_data.multi.eat_alarm,
      eating_cnt: '饮食人数:' + app.globalData.back_end_data.multi.eat_cnt[0] || '--',
      eatingStatus: this.data.eatingAlert ? '警报' : '正常',
    });

    // 如果有警报，显示通知
    if (this.data.fireAlert || this.data.stampedeAlert || this.data.smokingAlert || this.data.eatingAlert) {
      wx.showToast({
        title: '检测到安全警报',
        icon: 'none',
        duration: 2000
      });
    }
  },

  goBack: function() {
    // 使用 wx.navigateTo 返回到 DS3303 页面
    wx.navigateTo({
      url: '/pages/DS3303/DS3303'
    });
  }
});
