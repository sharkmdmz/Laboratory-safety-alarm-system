Page({
  data: {
      imageSrc: '',
      saveTime: ''
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
  }
});