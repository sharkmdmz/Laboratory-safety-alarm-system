Page({
  data: {
    labImage: 'https://img95.699pic.com/photo/50068/6985.jpg_wh860.jpg', // 实验室图片路径
    teacherPhoto: '/images/icons/user.png' // 教师照片路径
  },

  onLoad: function(options) {
    // 这里可以加载实际数据
    // this.loadLabDetail();
  },

  

  navigateBack: function() {
    wx.navigateTo({
      url: '/pages/DS3303/DS3303'
    });
  }
});