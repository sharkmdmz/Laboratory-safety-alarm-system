Page({
  data: {
    username: '',
    password: '',
    isModify: false // 是否来自修改模式
  },

  onLoad: function(options) {
    // 判断是否来自修改模式
    if (options.modify) {
      this.setData({
        isModify: true,
        username: wx.getStorageSync('username') || '',
        password: wx.getStorageSync('password') || ''
      });
    }
  },

  handleInputChange: function(e) {
    const { value } = e.detail;
    const { name } = e.target.dataset;
    this.setData({
      [name]: value
    });
  },

  handleRegister: function() {
    const { username, password } = this.data;
    if (!username || !password) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }
    
    // 保存用户名和密码到缓存
    wx.setStorageSync('username', username);
    wx.setStorageSync('password', password);
    
    wx.cloud.callFunction({
      name: 'register',
      data: { username, password },
      success: (res) => {
        console.log(res,22);
        if (res.result.code == 0) {
          wx.navigateBack();
          wx.showToast({ title: res.result.message });
        } else {
          wx.showToast({ title: res.result.message, icon: 'none' });
        }
      },
      fail: (err) => {
        wx.showToast({ title: '网络错误', icon: 'none' });
      }
    });
  },

  // 修改按钮点击事件
  handleModify: function() {
    const { username, password } = this.data;
    if (!username || !password) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }
    
    // 保存修改后的用户名和密码
    wx.setStorageSync('username', username);
    wx.setStorageSync('password', password);
    
    // 返回user-center页面并传递新用户名
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2]; // 上一个页面(user-center)
    if (prevPage) {
      prevPage.setData({
        username: username
      });
    }
    
    wx.navigateBack({
      success: () => {
        wx.showToast({ title: '修改成功' });
      }
    });
  }
});