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

  handleLogin: async function () {
    const { usernameOrEmail, password } = this.data;

    if (!usernameOrEmail ||!password) {
      wx.showToast({
        title: '请填写用户名/邮箱和密码',
        icon: 'none'
      });
      return;
    }
    try{
      const res = await wx.cloud.callFunction({
        name:'logIn',
        data:{
          account:usernameOrEmail,
          password:password
        }
      })
      if (res.result.code == 0) {
        // 登录成功，跳转到指定页面
        wx.switchTab({
          url: '/pages/warning/warning'
        });
      } else if(res.result.code == 500){
        wx.showToast({
          title: "登陆失败！",
          icon: 'error'
        });
      } else {
        wx.showToast({
          title: "用户名/邮箱或密码错误！",
          icon: 'error'
        });
      }
    }catch(err){
      console.log(err);
      wx.showToast({ 
        title: '登录失败', 
        icon: 'none' 
      });
    }
    
    
  }
});