Page({
  data: {
    username: '',
    password: '',
    showError: false
  },

  handleInputChange: function (e) {
    const { name, value } = e.detail;
    this.setData({
      [name]: value
    });
  },

  handleLogin: function () {
    const { username, password } = this.data;
    // 从本地存储中获取注册时存储的用户名和密码
    const storedUsername = wx.getStorageSync('username');
    const storedPassword = wx.getStorageSync('password');

    if (username === storedUsername && password === storedPassword) {
      // 登录成功，跳转到指定页面
      wx.switchTab({
        url: '/pages/warning/warning'
      });
    } else {
      this.setData({
        showError: true
      });
      setTimeout(() => {
        this.setData({
          showError: false
        });
      }, 2000);
    }
  }
});