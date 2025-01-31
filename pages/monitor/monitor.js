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
    console.log(this.data.labName);
  }, //记录摄像头的名字

  getSreenList() {
    wx.request({
      url: "https://applet-base-api-t.itheima.net/slides", //需调用的网页地址
      method: "GET",
      success: (res) => {
        console.log(res);
        this.setData({
          screenList: res.data,
        });
      },
      fail(e){
        console.log(e,111)
      },
      complete(e){
        console.log(e,111);
      }
    });
  }, //从外部网页调用图片
});
