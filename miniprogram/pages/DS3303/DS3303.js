Page({
  data: {
    // 视频源数据
    videoSrc: 'http://192.168.192.191:5000/multi_video_feed',
    teacherPhoto: '/images/icons/user.png', // 老师照片路径
    
    // 实验室信息
    labManager: '......',
    labPhone: '........'
  },

  navigateToDetail: function() {
    wx.navigateTo({
      url: '/pages/DS3303/DS3303_detail/DS3303_detail'
    });
  },

  navigateToRecord: function() {
    wx.navigateTo({
      url: '/pages/DS3303/DS3303_record/DS3303_record'
    });
  },

  navigateToCamera: function(e) {
    const camera = e.currentTarget.dataset.camera;
    wx.navigateTo({
      url: `/pages/DS3303/DS3303_camera${camera}/DS3303_camera${camera}?videoSrc=${this.data.videoSrc}`
    });
  },
  
  onLoad: function() {
    // 可以在这里请求真实数据
    // this.getLabData();
  },
  
  getLabData: function() {
    wx.request({
      url: 'http://192.168.192.191:5000/lab_info',
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