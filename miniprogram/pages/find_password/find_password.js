Page({
  data: {
    email: '',
    code: '',
    countdown: 0,
    correctCode: '' // 存储正确的验证码
  },

  handleInputChange: function (e) {
    const { value } = e.detail;
    const { name } = e.target.dataset;
    this.setData({
      [name]: value
    });
  },

  getVerificationCode: function () {
    const { email } = this.data;
    if (!email) {
      wx.showToast({ title: '请输入邮箱', icon: 'none' });
      return;
    }

    // 发送验证码（这是模拟）
    const code = Math.floor(100000 + Math.random() * 900000);
    this.setData({
      correctCode: code.toString(),
      countdown: 60
    });

    const interval = setInterval(() => {
      if (this.data.countdown > 0) {
        this.setData({
          countdown: this.data.countdown - 1
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    wx.showToast({ title: '验证码已发送到邮箱，请查收', icon: 'none' });
  },

  verifyCode: function () {
    const { code, correctCode } = this.data;
    if (code === correctCode) {
      wx.navigateTo({
        url: '/pages/register/register?modify=true'
      });
    } else {
      wx.showToast({ title: '验证码错误', icon: 'none' });
    }
  }
});
    