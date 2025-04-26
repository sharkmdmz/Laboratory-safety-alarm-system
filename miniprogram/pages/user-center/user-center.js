Page({
  data: {
    avatarUrl: '',
    username: 'shipship'
  },

  onLoad: function(options) {
    this.loadUserInfo();
  },

  onShow: function() {
    // 页面显示时重新加载用户信息，确保数据最新
    this.loadUserInfo();
  },

  loadUserInfo: function() {
    // 从缓存获取用户名
    const username = wx.getStorageSync('username');
    if (username) {
      this.setData({ username });
    }
    
    // 从缓存获取头像
    const avatarUrl = wx.getStorageSync('avatarUrl');
    if (avatarUrl) {
      this.setData({ avatarUrl });
    }
  },

  // 选择头像
  chooseAvatar: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          avatarUrl: tempFilePath
        });
        // 保存到缓存
        wx.setStorageSync('avatarUrl', tempFilePath);
      }
    });
  },

  // 跳转到注册/修改信息页面
  navigateToRegister: function() {
    wx.navigateTo({
      url: '/pages/registor/registor?modify=1' // 添加modify参数表示修改模式
    });
  },

  // 跳转到设置页面
  navigateToSetting: function() {
    wx.navigateTo({
      url: '/pages/setting/setting'
    });
  }
});