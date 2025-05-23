const app = getApp();
Page({
  data: {
    labImage: "/images/pictures/CQU.png", // 实验室图片URL
    ds3303Status: "正常",
    ds3304Status: "正常",
    ds3305Status: "正常",
    ds3402Status: "正常",
    ds3401Status: "正常",
    iconPath: "/images/icons/shoe.png" // 图标路径
  },

  // 跳转到 DS3303 页面
  navigateToDS3303() {
    wx.navigateTo({
      url: '/pages/DS3303/DS3303' // 请根据实际页面路径修改
    });
  },

  // 跳转到 DS3304 页面
  navigateToDS3304() {
    wx.navigateTo({
      url: '/pages/DS3304/DS3304' // 请根据实际页面路径修改
    });
  },

  // 跳转到 DS3305 页面
  navigateToDS3305() {
    wx.navigateTo({
      url: '/pages/DS3305/DS3305' // 请根据实际页面路径修改
    });
  },

  // 跳转到 DS3402 页面
  navigateToDS3402() {
    wx.navigateTo({
      url: '/pages/DS3402/DS3402' // 请根据实际页面路径修改
    });
  },

  // 跳转到 DS3401 页面
  navigateToDS3401() {
    wx.navigateTo({
      url: '/pages/DS3401/DS3401' // 请根据实际页面路径修改
    });
  },

  onLoad: function () {
    this.change_data();
    this.dataUpdateInterval = setInterval(() => {
      this.change_data();
    }, 5000);
  },

  onUnload: function () {
    clearInterval(this.dataUpdateInterval);
  },

  change_data() {
    const isAlarm = app.globalData.back_end_data.multi.smoke_alarm;
    const status = isAlarm ? "警报" : "正常";
    this.setData({
      ds3303Status: status,
      ds3304Status: status,
      ds3305Status: status,
      ds3402Status: status,
      ds3401Status: status
    });
  }
})    