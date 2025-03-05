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
        let names = this.data.screenList.map( screenList => screenList.id );
        app.globalData.cameraName = names;
      },
    });
  }, //从外部网页调用图片
});