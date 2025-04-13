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
    const fireThreshold = wx.getStorageSync('fireThreshold');
    const crowdThreshold = wx.getStorageSync('crowdThreshold');
    const labImageFromStorage = wx.getStorageSync('labImage');
    
    this.setData({
      fireThreshold: fireThreshold !== undefined ? parseFloat(fireThreshold) : 0.50,
      crowdThreshold: crowdThreshold !== undefined ? parseInt(crowdThreshold) : 10,
      
    });
  },

  // 增加火灾阈值（步长0.01）
  increaseFireThreshold: function() {
    const newValue = parseFloat((this.data.fireThreshold + 0.01).toFixed(2));
    this.setData({
      fireThreshold: newValue
    });
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
    
    // 验证输入
    if (fireThreshold <= 0 || crowdThreshold <= 0) {
      wx.showToast({
        title: '阈值必须大于0',
        icon: 'none'
      });
      return;
    }
    
    // 保存到缓存
    wx.setStorageSync('fireThreshold', fireThreshold);
    wx.setStorageSync('crowdThreshold', crowdThreshold);
    
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
});