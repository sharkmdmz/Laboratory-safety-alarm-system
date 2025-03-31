Page({
  navigateToDetail: function () {
    wx.navigateTo({
      url: '/pages/DS3402_detail/DS3402_detail'
    });
  },
  navigateToRecord: function () {
    wx.navigateTo({
      url: '/pages/DS3402_record/DS3402_record'
    });
  },
  navigateToCamera: function (e) {
    const camera = e.currentTarget.dataset.camera;
    wx.navigateTo({
      url: `/pages/DS3402_camera${camera}/DS3402_camera${camera}`
    });
  }
});
    