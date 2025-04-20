const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fire:false,
    step:false,
    smoke:false,
    eat:false
  },

  change_data(){
    this.setData({
      fire: app.globalData.back_end_data.multi.smoke_alarm,
      step: app.globalData.data.multi.people_alarm,
      smoke: app.globalData.data.multi.cigarrete_alarm,
      eat: app.globalData.data.multi.eat_alarm
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.change_data();
    this.timer = setInterval(() => {
      this.change_data();
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
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } // 页面卸载时清除定时器
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