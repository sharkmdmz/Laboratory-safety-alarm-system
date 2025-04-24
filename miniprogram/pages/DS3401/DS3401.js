Page({
  data: {
    // 视频源数据
    videoSrc: 'http://192.168.192.191:5000/cigarette_video_feed',
    teacherPhoto: '/images/icons/实验室用户管理.png', // 老师照片路径
    
    // 实验室信息
    labManager: '......',
    labPhone: '........'
  },

  navigateToDetail: function() {
    wx.navigateTo({
      url: '/pages/DS3401/DS3401_detail/DS3401_detail'
    });
  },

  navigateToRecord: function() {
    wx.navigateTo({
      url: '/pages/DS3401/DS3401_record/DS3401_record'
    });
  },

  navigateToCamera: function(e) {
    const camera = e.currentTarget.dataset.camera;
    wx.navigateTo({
      url: `/pages/DS3401/DS3401_camera${camera}/DS3401_camera${camera}?videoSrc=${this.data.videoSrc}`
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