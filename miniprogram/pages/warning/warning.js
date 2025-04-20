const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fire: false,
    step: false,
    smoke: false,
    eat: false
  },

  /**
   * 更新数据方法
   */
  change_data() {
    this.setData({
      
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
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
})