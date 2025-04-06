Page({
  data: {
    fireStatus: '正常',
    fireTime: '--',
    fireAlert: false,
    stampedeStatus: '正常',
    stampedeTime: '--',
    stampedeAlert: false,
    smokingStatus: '正常',
    smokingTime: '--',
    smokingAlert: false,
    eatingStatus: '正常',
    eatingTime: '--',
    eatingAlert: false
  },

  onLoad: function(options) {
    // 初始化视频流
    this.initVideo();
    // 连接WebSocket获取监测数据
    this.connectWebSocket();
  },

  initVideo: function() {
    // 这里应该替换为实际的视频流地址
    const videoContext = wx.createVideoContext('mainVideo');
    // 模拟视频源
    videoContext.src = 'https://example.com/live/DS3303/camera1';
    videoContext.play();
  },

  connectWebSocket: function() {
    // 连接WebSocket获取实时监测数据
    const socket = wx.connectSocket({
      url: 'wss://your-backend.com/ws',
      success: () => {
        socket.onMessage((res) => {
          const data = JSON.parse(res.data);
          this.updateMonitorData(data);
        });
      }
    });
  },

  updateMonitorData: function(data) {
    // 更新监测数据
    this.setData({
      fireStatus: data.fire ? '警报' : '正常',
      fireTime: data.fireTime || '--',
      fireAlert: data.fire,
      stampedeStatus: data.stampede ? '警报' : '正常',
      stampedeTime: data.stampedeTime || '--',
      stampedeAlert: data.stampede,
      smokingStatus: data.smoking ? '警报' : '正常',
      smokingTime: data.smokingTime || '--',
      smokingAlert: data.smoking,
      eatingStatus: data.eating ? '警报' : '正常',
      eatingTime: data.eatingTime || '--',
      eatingAlert: data.eating
    });

    // 如果有警报，显示通知
    if (data.fire || data.stampede || data.smoking || data.eating) {
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