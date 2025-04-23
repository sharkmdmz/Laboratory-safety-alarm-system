Page({
  data: {
    usernameOrEmail: '',
    password: ''
  },

  handleInputChange: function (e) {
    const { value } = e.detail;
    const { name } = e.currentTarget.dataset;
    this.setData({
      [name]: value
    });
  },

  handleLogin: function () {
    const { usernameOrEmail, password } = this.data;

    if (!usernameOrEmail ||!password) {
      wx.showToast({
        title: '请填写用户名/邮箱和密码',
        icon: 'none'
      });
      return;
    }

    // 从本地存储中获取注册时存储的用户名、邮箱和密码
    const storedUsername = wx.getStorageSync('username');
    const storedEmail = wx.getStorageSync('email');
    const storedPassword = wx.getStorageSync('password');

    if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword) {
      // 登录成功，跳转到指定页面
      wx.switchTab({
        url: '/pages/monitor/monitor'
      });
    } else {
      wx.showToast({
        title: "用户名/邮箱或密码错误！",
        icon: 'error'
      });
    }
  }
});