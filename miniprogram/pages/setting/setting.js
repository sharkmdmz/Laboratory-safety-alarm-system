const app = getApp();
Page({
  data: {
    labImage: "https://ts1.tc.mm.bing.net/th/id/R-C.08afbe9e018f97368368b9c62213eaf1?rik=WGAt%2flvwvQ7jeA&riu=http%3a%2f%2fwww.sxsure.com%2fuploadfile%2f2018%2f1107%2f20181107111302536.jpg&ehk=taEb0H1cfisBgypAg%2bVQ41xm%2bntUnicBvXVUtr4cNak%3d&risl=&pid=ImgRaw&r=0",
    fireThreshold: 0.50, // 初始值改为0.50
    crowdThreshold: 10,
    IP: app.globalData.IP
  },

  onLoad: function() {
    this.loadSettings();
  },

  loadSettings: function() {
    this.setData({
      fireThreshold: app.globalData.smoke_threshold,
      crowdThreshold: app.globalData.people_threshold,
      IP: app.globalData.IP
    });
  },

  // 增加火灾阈值（步长0.01）
  increaseFireThreshold: function() {
    if(this.data.fireThreshold<1){
      const newValue = parseFloat((this.data.fireThreshold + 0.01).toFixed(2));
      this.setData({
        fireThreshold: newValue
      });
    }
  },

  // 减少火灾阈值（步长0.01）
  decreaseFireThreshold: function() {
    if (this.data.fireThreshold > 0.01) {
      const newValue = parseFloat((this.data.fireThreshold - 0.01).toFixed(2));
      this.setData({
        fireThreshold: newValue
      });
    }
  },

  // 增加踩踏阈值（步长1）
  increaseCrowdThreshold: function() {
    this.setData({
      crowdThreshold: this.data.crowdThreshold + 1
    });
  },

  // 减少踩踏阈值（步长1）
  decreaseCrowdThreshold: function() {
    if (this.data.crowdThreshold > 1) {
      this.setData({
        crowdThreshold: this.data.crowdThreshold - 1
      });
    }
  },

  IP_change:function(e){
    console.log(e);
    this.setData({
      IP:e.detail.value
    })
  },

  handleSave: function() {
    const { fireThreshold, crowdThreshold, IP } = this.data;
    // 保存到缓存
    wx.setStorageSync('smoke_threshold', fireThreshold);
    wx.setStorageSync('people_threshold', crowdThreshold);
    wx.setStorageSync('IP_end', IP);
    app.globalData.smoke_threshold = fireThreshold;
    app.globalData.people_threshold = crowdThreshold;
    app.globalData.IP = IP;
    app.globalData.timer = setInterval(() => {
      wx.request({
        url: 'http://' + app.globalData.IP + ':5000/get_multi_status',
        method: 'POST',
        data:{
          smoke_threshold: app.globalData.smoke_threshold,
          people_threshold: app.globalData.people_threshold
        }
      })
      console.log('定时任务执行');
    }, 5000);
    wx.setStorageSync('timer',app.globalData.timer);
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
});