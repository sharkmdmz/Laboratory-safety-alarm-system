Page({

  /**
   * 页面的初始数据
   */
  data: {
    fire:0,
    step:0,
    smoke:0,
    eat:0
  },

  //信息数量的改变
  fireAdd(){
    this.setData({fire:this.data.fire+1}),
    console.log(this.data.fire)
  },
  stepAdd(){
    this.setData({step:this.data.step+1})
  },
  smokeAdd(){
    this.setData({smoke:this.data.smoke+1})
  },
  eatAdd(){
    this.setData({eat:this.data.eat+1})
  },
  fireTap(){
    this.setData({fire:0})
  },
  stepTap(){
    this.setData({step:0})
  },
  smokeTap(){
    this.setData({smoke:0})
  },
  eatTap(){
    this.setData({eat:0})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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