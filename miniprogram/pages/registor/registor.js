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

    // 先请求订阅消息
    wx.requestSubscribeMessage({
      tmplIds: ['XSwJOWkOKZvvHEnn9gDDM3vdIes8-6G2HNpuBcI47rI'],
      success: (subscribeRes) => {
        if (subscribeRes['XSwJOWkOKZvvHEnn9gDDM3vdIes8-6G2HNpuBcI47rI'] === 'accept') {
          // 用户同意订阅，发送验证码
          wx.cloud.callFunction({
            name: 'getOpenId',
            success: (res) => {
              const openid = res.result.openid;
              // 发送验证码请求
              wx.request({
                url: '你的后端API地址/send-code',/////////////////////////////
                method: 'POST',
                data: {
                  email: this.data.email,
                  checkCode: checkCode,
                  openid: openid
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
                    });
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
            fail: (err) => {
              console.error('获取openid失败', err);
              wx.showToast({
                title: '获取用户信息失败',
                icon: 'none'
              });
            }
          });
        } else {
          wx.showToast({
            title: '需要同意订阅才能获取验证码',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('订阅失败', err);
        wx.showToast({
          title: '订阅消息请求失败',
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

  handleRegister: async function () {
    const { username, password, email, emailReal, code, codeRandom } = this.data;

    if (!username || !password || !email || !code) {
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
    }

    try {
      const res = await wx.cloud.callFunction({
        name: 'register',
        data: { username, password, email }
      });

      if (res.result.code === 0) {
        // 注册成功后，请求订阅消息
        wx.requestSubscribeMessage({
          tmplIds: ['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'],
          success: (subscribeRes) => {
            if (subscribeRes['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'] === 'accept') {
              // 用户同意订阅
              wx.showToast({ 
                title: '注册成功，已开启消息订阅', 
                icon: 'success' 
              });
            } else {
              // 用户拒绝订阅
              wx.showToast({ 
                title: '注册成功，但未开启消息订阅', 
                icon: 'success' 
              });
            }
            // 无论是否订阅，都返回上一页
            setTimeout(() => {
              wx.navigateBack();
            }, 1500);
          },
          fail: (err) => {
            console.error('订阅失败', err);
            wx.showToast({ 
              title: '注册成功，但订阅消息失败', 
              icon: 'success' 
            });
            setTimeout(() => {
              wx.navigateBack();
            }, 1500);
          }
        });
      } else {
        wx.showToast({ 
          title: res.result.message, 
          icon: 'none' 
        });
      }
    } catch (err) {
      console.error(err);
      wx.showToast({ 
        title: '注册失败', 
        icon: 'none' 
      });
    }
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