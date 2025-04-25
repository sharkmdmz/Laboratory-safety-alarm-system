const app = getApp();
Page({
  data: {
    // 视频源数据
    videoSrc: 'http://' + app.globalData.IP + ':5000/cigarette_video_feed',
    teacherPhoto: '/images/icons/实验室用户管理.png', // 老师照片路径
    
    // 实验室信息
    labManager: '......',
    labPhone: '........'
  },

  navigateToDetail: function() {
    wx.navigateTo({
      url: '/pages/DS3402/DS3402_detail/DS3402_detail'
    });
  },

  navigateToRecord: function() {
    wx.navigateTo({
      url: '/pages/DS3402/DS3402_record/DS3402_record'
    });
  },

  navigateToCamera: function(e) {
    const camera = e.currentTarget.dataset.camera;
    wx.navigateTo({
      url: `/pages/DS3402/DS3402_camera${camera}/DS3402_camera${camera}?videoSrc=${this.data.videoSrc}`
    });
  },
  
  onLoad: function() {
    // 可以在这里请求真实数据
    // this.getLabData();
  },
  
  getLabData: function() {
    wx.request({
      url: 'http://' + app.globalData.IP + ':5000/lab_info',
      success: (res) => {
        this.setData({
          teacherPhoto: res.data.photo || '',
          labManager: res.data.manager || '.......',
          labPhone: res.data.phone || '........'
        });
      }
    });
  }
});