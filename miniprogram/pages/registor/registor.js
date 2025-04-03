Page({
  data: {
    username: '',
    password: ''
  },
  handleInputChange: function (e) {
    console.log(e,11);
    const { value } = e.detail;
    const { name } = e.target.dataset;
    console.log(e.target.dataset,name,22);
    this.setData({
      [name]: value
    });
  },
  handleRegister: function () {
    console.log(this.data);
    const { username, password } = this.data;
    if (!username || !password) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }
    wx.cloud.callFunction({
      name: 'register',
      data: { username, password },
      success: (res) => {
        if (res.result.code === 0) {
          wx.showToast({ title: res.result.message });
          wx.navigateBack();
        } else {
          wx.showToast({ title: res.result.message, icon: 'none' });
        }
      },
      fail: (err) => {
        wx.showToast({ title: '网络错误', icon: 'none' });
      }
    });
  }
});