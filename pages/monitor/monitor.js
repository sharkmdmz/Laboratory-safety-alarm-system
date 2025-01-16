let arr = [];
Page({
  data: {
    screenList: [],
    labName: [],
  },

  onLoad: function (option) {
    this.getSreenList();
  },

  labName(e) {
    arr[e.target.dataset.index] = e.detail.value;
    this.setData({
      labName: arr,
    });
  }, //记录摄像头的名字

  getSreenList() {
    wx.request({
      url: "https://applet-base-api-t.itheima.net/slides", //需调用的网页地址
      method: "GET",
      success: (res) => {
        console.log(res.data);
        this.setData({
          screenList: res.data,
        });
      },
    });
  }, //从外部网页调用图片
});
