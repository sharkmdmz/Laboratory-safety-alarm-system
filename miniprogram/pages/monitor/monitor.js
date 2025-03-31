Page({
  data: {
      labs: ['DS3402', 'DS3403', 'DS3404', 'DS3405', 'DS3406']
  },
  navigateToLab: function (e) {
      const lab = e.currentTarget.dataset.lab;
      wx.navigateTo({
          url: `/pages/${lab}/${lab}`
      });
  }
});
  