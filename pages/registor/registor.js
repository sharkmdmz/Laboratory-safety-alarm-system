Page({
  data: {
    username: '',
    password: ''
  },
  handleInputChange: function (e) {
    const { name, value } = e.detail;
    this.setData({
      [name]: value
    });
  },
  handleRegister: function () {
    const { username, password } = this.data;
    // 存储用户名和密码到本地存储
    wx.setStorageSync('username', username);
    wx.setStorageSync('password', password);
    // 跳转回登录页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});