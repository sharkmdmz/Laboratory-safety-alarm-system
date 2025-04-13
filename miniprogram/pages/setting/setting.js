const app = getApp();
Page({
  data: {
    labImage: "/images/pictures/Lab.jpg",
    fireThreshold: 0.50, // 初始值改为0.50
    crowdThreshold: 10
  },

  onLoad: function() {
    this.loadSettings();
  },

  loadSettings: function() {
    const fireThreshold = app.globalData.smoke_threshold;
    const crowdThreshold = app.globalData.people_threshold;
    
    this.setData({
      fireThreshold: fireThreshold !== undefined ? parseFloat(fireThreshold) : 0.50,
      crowdThreshold: crowdThreshold !== undefined ? parseInt(crowdThreshold) : 10,
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

  handleSave: function() {
    const { fireThreshold, crowdThreshold } = this.data;
    
    // 保存到缓存
    wx.setStorageSync('smoke_threshold', fireThreshold);
    wx.setStorageSync('people_threshold', crowdThreshold);
    app.globalData.smoke_threshold = fireThreshold;
    app.globalData.people_threshold = crowdThreshold;
    app.globalData.timer = setInterval(() => {
      wx.request({
        url: 'url',
        method: 'POST',
        data:{
          smoke_threshold: app.globalData.smoke_threshold,
          people_threshold: app.globalData.people_threshold
        }
      })
      console.log('定时任务执行');
    }, 50000000);
    wx.setStorageSync('timer',app.globalData.timer);
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
});