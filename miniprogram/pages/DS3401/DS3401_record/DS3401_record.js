Page({
  data: {
    labImage: "https://img95.699pic.com/photo/50068/6985.jpg_wh860.jpg", // 实验室图片URL
    fireAlert: false,
    
   
    stampedeAlert: false,
    
    
    smokingAlert: false,
    
    
    eatingAlert: false,
    
    
  },

  // 跳转到火灾历史记录页面
  navigateToFirePage() {
    // 这里填写实际的跳转网址
    wx.navigateTo({
      url: '' 
    });
  },

  // 跳转到踩踏历史记录页面
  navigateToStampedePage() {
    // 这里填写实际的跳转网址
    wx.navigateTo({
      url: '' 
    });
  },

  // 跳转到吸烟历史记录页面
  navigateToSmokingPage() {
    // 这里填写实际的跳转网址
    wx.navigateTo({
      url: '' 
    });
  },

  // 跳转到饮食历史记录页面
  navigateToEatingPage() {
    // 这里填写实际的跳转网址
    wx.navigateTo({
      url: '' 
    });
  }
})    