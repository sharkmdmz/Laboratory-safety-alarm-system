let arr = [];
const app = getApp();
Page({
  data: {
    screenList: []
  },

  onLoad: function (option) {
    this.getSreenList();
  },

  labName(e) {
    arr[e.target.dataset.index] = e.detail.value;
    app.globalData.cameraName = arr,
      console.log(app.globalData.cameraName);
  }, //记录摄像头的名字

  getSreenList() {
    wx.request({
      url: "https://applet-base-api-t.itheima.net/slides", //flask后端的域名
      method: "GET",
      success: (res) => {
        console.log(res);
        this.setData({
          screenList: res.data,
        });
      },
      fail(e) {
        console.log(e, 111)
      },
      complete(e) {
        console.log(e, 1111);
      }
    });
  }, //从外部网页调用图片
});