Page({
  data: {
    labImage: '/images/pictures/CQU.png', // 实验室图片路径
    teacherPhoto: '/images/icons/实验室用户管理.png' // 教师照片路径
  },

  onLoad: function(options) {
    // 这里可以加载实际数据
    // this.loadLabDetail();
  },

  

  navigateBack: function() {
    wx.navigateTo({
      url: '/pages/DS3304/DS3304'
    });
  }
});