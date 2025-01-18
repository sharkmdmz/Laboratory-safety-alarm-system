Page({
  data: {
    videoSrc: '摄像头实时视频地址'
  },
  goBack: function() {
    wx.navigateBack({
      delta: 1
    });
  }
});