Page({
  data: {
    username: '',
    password: ''
  },
  handleInputChange: function (e) {
    console.log(e,11);
    const { value } = e.detail;
    const {name  } = e.target.dataset;
    console.log(e.target.dataset,name,22);
    this.setData({
      [name]: value
    });
  },
  handleRegister: function () {
    console.log(this.data);
    const { username, password } = this.data;
    // 存储用户名和密码到本地存储
    wx.setStorageSync('username', username);
    wx.setStorageSync('password', password);
    console.log(username,password)
    // 跳转回登录页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});