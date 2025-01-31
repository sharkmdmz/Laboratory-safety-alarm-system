Page({
  data: {
    username: '',
    password: '',
  },

  handleInputChange: function (e) {
    console.log(e);
    const { value } = e.detail;
    const {name  } = e.target.dataset;
    console.log(e.target.dataset);
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
      wx.showToast({	title:"不存在该用户！",icon:'error'})
    }
  }
});