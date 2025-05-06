Page({
  data: {
    username: '',
    password: '',
    email: '',
    emailReal: '',
    code: '',
    codeRandom: '',
    countdown: 0,
    timer: null
  },

  handleInputChange: function (e) {
    console.log(e);
    const { value } = e.detail;
    const { name } = e.currentTarget.dataset;
    this.setData({
      [name]: value
    });
  },

  getVerificationCode: function () {
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
      // 生成一个0到999999之间的随机数
      const randomNum = Math.floor(Math.random() * 1000000);
      const checkCode = randomNum.toString().padStart(6, '0');
      setTimeout(() => {
        // 这里写你要执行的函数
        timeUp();
      }, 300000);
    // 发送验证码请求
    wx.request({
      url: '你的后端API地址/send-code',   //////////////////////////
      method: 'POST',
      data: {
        email: this.data.email,
        checkCode: checkCode
      },
      success: (res) => {
        if (res.data.success) {
          wx.showToast({
            title: '验证码已发送',
            icon: 'success'
          });
          this.startCountdown();
          this.setData({
            emailReal: this.data.email,
            codeRandom: checkCode
          })
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

  startCountdown: function () {
    this.setData({ countdown: 60 });
    this.data.timer = setInterval(() => {
      if (this.data.countdown <= 0) {
        clearInterval(this.data.timer);
        return;
      }
      this.setData({ countdown: this.data.countdown - 1 });
    }, 1000);
  },

  handleRegister:function () {
    const { username, password, email, emailReal, code, codeRandom } = this.data;

    if (!username ||!password ||!email ||!code) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }
    if(code != codeRandom || email != emailReal){
      wx.showToast({
        title: '验证码错误',
        icon: 'error'
      });
      return;
    };
    this.call(username, password, email);
    // 模拟注册逻辑，实际需调用后端接口
    // wx.setStorageSync('username', username);
    // wx.setStorageSync('password', password);
  },

  call:async function(username, password, email){
    try {
      const res =await wx.cloud.callFunction({
        name: 'register',
        data: { username, password, email }
      })

      if (res.result.code === 200) {
        wx.showToast({ title: '注册成功', icon: 'success' });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500)
      } else {
        wx.showToast({ title: res.result.message, icon: 'none' })
      }
    } catch (err) {
      wx.showToast({ title: '注册失败', icon: 'none' })
      console.error(err)
    };
  },

  timeUp(){
    this.setData({
      codeRandom:Math.random() * 1000000
    })
  },

  onLoad: function(){
    this.timeUp();
  },

  onUnload: function () {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
  }
});