const app = getApp();
Page({
  data: {
      labs: ['DS3303', 'DS3304', 'DS3305', 'DS3402', 'DS3401']
  },
  navigateToLab: function (e) {
      const lab = e.currentTarget.dataset.lab;
      wx.navigateTo({
          url: `/pages/${lab}/${lab}`
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.timer = setInterval(() => {
      wx.request({
        url: 'http://192.168.192.191:5000/get_multi_status',
        method: 'POST',
        data:{
          smoke_threshold: app.globalData.smoke_threshold,
          people_threshold: app.globalData.people_threshold
        }
      })
      console.log('定时任务执行');
    }, 5000);
    app.globalData.timer2 = setInterval(() => {
      wx.request({
        url: 'http://192.168.192.191:5000/get_multi_status',
        method: 'GET',
        success (res) {
          console.log(res.data);
          app.globalData.back_end_data=res.data;
        }
      })
      console.log('定时任务执行');
    }, 5000);
    // 点击按钮触发订阅请求
  wx.requestSubscribeMessage({
    tmplIds: ['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'], // 替换成你的模板ID
    success(res) {
      if (res['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'] === 'accept') {
        console.log('用户同意订阅');
        try {
          const res = await wx.cloud.callFunction({
            name: 'getOpenId',
            data: {}
          })
          if (res.result.openid) {
            wx.request({
              url: 'http://' + app.globalData.IP + ':5000/wx/subscribe',
              method: 'POST',
              data:{
                openid:res.result.openid
              },
            })
          } else {
            wx.showToast({ title: '请求超时', icon: 'none' })
          }
        } catch (err) {
          wx.showToast({ title: '注册失败', icon: 'none' })
          console.error(err)
        }
      } else {
        console.log('用户拒绝订阅', res)
      }
    },
    fail(err) {
      console.error('订阅失败', err)
    }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
    