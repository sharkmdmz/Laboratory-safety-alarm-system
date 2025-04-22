Page({
  data: {
    username: '',
    email: '',
    password: '',
    code: '',
    countdown: 0,
    timer: null
  },

  handleInputChange: function(e) {
    const { value } = e.detail;
    const { name } = e.currentTarget.dataset;
    this.setData({
      [name]: value
    });
  },

  getVerificationCode: function() {
    if (!this.data.email) {
      wx.showToast({
        title: '请输入邮箱地址',
        icon: 'none'
      });
      return;
    }
    
    // 验证邮箱格式
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailReg.test(this.data.email)) {
      wx.showToast({
        title: '邮箱格式不正确',
        icon: 'none'
      });
      return;
    }
    
    // 发送验证码请求
    wx.request({
      url: '你的后端API地址/send-code',
      method: 'POST',
      data: {
        email: this.data.email
      },
      success: (res) => {
        if (res.data.success) {
          wx.showToast({
            title: '验证码已发送',
            icon: 'success'
          });
          this.startCountdown();
        } else {
          wx.showToast({
            title: res.data.message || '发送失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      }
    });
  },

  startCountdown: function() {
    this.setData({ countdown: 60 });
    this.data.timer = setInterval(() => {
      if (this.data.countdown <= 0) {
        clearInterval(this.data.timer);
        return;
      }
      this.setData({ countdown: this.data.countdown - 1 });
    }, 1000);
  },

  handleLogin: function() {
    const { username, password } = this.data;
    
    if (!username || !password) {
      wx.showToast({
        title: '请填写用户名和密码',
        icon: 'none'
      });
      return;
    }
    
    // 从本地存储中获取注册时存储的用户名和密码
    const storedUsername = wx.getStorageSync('username');
    const storedPassword = wx.getStorageSync('password');

    if (username === storedUsername && password === storedPassword) {
      // 登录成功，跳转到指定页面
      wx.switchTab({
        url: '/pages/monitor/monitor'
      });
    } else {
      wx.showToast({
        title: "不存在该用户！",
        icon: 'error'
      });
    }
  },

  onUnload: function() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
  }
});