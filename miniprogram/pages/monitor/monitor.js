Page({
  data: {
      labs: ['DS3303', 'DS3304', 'DS3305', 'DS3402', 'DS3401']
  },
  navigateToLab: function (e) {
      const lab = e.currentTarget.dataset.lab;
      wx.navigateTo({
          url: `/pages/${lab}/${lab}`
      });
  }
});
    