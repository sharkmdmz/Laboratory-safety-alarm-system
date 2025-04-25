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
    app.globalData.timer =  setInterval(() => {
      wx.request({
        url: 'http://' + app.globalData.IP + ':5000/get_multi_status',
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
        url: 'http://' + app.globalData.IP + ':5000/get_multi_status',
        method: 'GET',
        success (res) {
          console.log(res.data);
          app.globalData.back_end_data=res.data;
        }
      })
      console.log('定时任务执行');
    }, 5000);
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
    