Page({
  data: {
    imageSrc: '',
    saveTime: '',
    viewWebsite: '' // 查看图片的网站地址，初始为空
  },
  onLoad: function (options) {
    this.setData({
      imageSrc: options.imageSrc,
      saveTime: options.saveTime
    });
  },
  saveImage: function () {
    wx.request({
      url: this.data.imageSrc,
      method: 'GET',
      responseType: 'arraybuffer',
      success: (res) => {
        const contentType = res.header['Content-Type'];
        const blob = new Blob([res.data], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `smoking_${this.data.saveTime}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
      },
      fail: (err) => {
        console.error('下载图片失败:', err);
        wx.showToast({
          title: '下载图片失败',
          icon: 'none'
        });
      }
    });
  },
  // 新增查看图片的网站跳转功能
  viewImageOnWebsite: function () {
    if (this.data.viewWebsite) {
      wx.navigateTo({
        url: this.data.viewWebsite
      });
    } else {
      wx.showToast({
        title: '查看图片的网站地址为空',
        icon: 'none'
      });
    }
  }
});