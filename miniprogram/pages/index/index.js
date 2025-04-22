Page({
  data: {
      identifier: '',
      credential: '',
      loginType: 'username',
      countdown: 0,
      timer: null
  },

  handleInputChange: function (e) {
      const { value } = e.detail;
      const { name } = e.currentTarget.dataset;
      this.setData({
          [name]: value
      });
  },

  switchLoginType: function (e) {
      const { type } = e.currentTarget.dataset;
      if ((type === 'username' && this.data.loginType === 'email') || (type === 'email' && this.data.loginType === 'username')) {
          this.setData({
              loginType: type === 'username'? 'username' : 'email',
              identifier: '',
              credential: ''
          });
          if (type === 'email') {
              this.stopCountdown();
          }
      }
  },

  startCountdown: function () {
      this.setData({ countdown: 60 });
      this.data.timer = setInterval(() => {
          if (this.data.countdown <= 0) {
              this.stopCountdown();
              return;
          }
          this.setData({ countdown: this.data.countdown - 1 });
      }, 1000);
  },

  stopCountdown: function () {
      if (this.data.timer) {
          clearInterval(this.data.timer);
          this.data.timer = null;
      }
      this.setData({ countdown: 0 });
  },

  getVerificationCode: function () {
      const { identifier } = this.data;
      if (!identifier.trim()) {
          wx.showToast({
              title: '请填写邮箱信息！',
              icon: 'none'
          });
          return;
      }

      // 验证邮箱格式
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(identifier)) {
          wx.showToast({
              title: '邮箱格式不正确',
              icon: 'none'
          });
          return;
      }

      // 后端请求部分
      // 成功提示
      wx.showToast({
          title: '验证码已发送',
          icon: 'success'
      });
      this.startCountdown();
  },

  handleLogin: function () {
      const { identifier, credential, loginType } = this.data;

      if (!identifier ||!credential) {
          wx.showToast({
              title: '请填写完整信息',
              icon: 'none'
          });
          return;
      }

      if (loginType === 'username') {
          const storedUsername = wx.getStorageSync('username');
          const storedPassword = wx.getStorageSync('password');
          if (identifier === storedUsername && credential === storedPassword) {
              wx.switchTab({
                  url: '/pages/monitor/monitor'
              });
          } else {
              wx.showToast({
                  title: "不存在该用户！",
                  icon: 'error'
              });
          }
      } else if (loginType === 'email') {
          wx.showToast({
              title: '邮箱登录功能暂未实现',
              icon: 'none'
          });
      }
  }
});