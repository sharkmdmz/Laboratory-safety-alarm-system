Page({
  requestSubscribe() {
    wx.requestSubscribeMessage({
      tmplIds: ['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'], 
      success: (res) => {
        if (res['pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw'] === 'accept') {
          // 业务逻辑（如监控到异常时）
          wx.cloud.callFunction({
            name: 'wxMessage',
            data:{},
            success: (res) => {
              console.log('通知发送结果:', res);
            },
            fail: (err) => {
              console.error('调用失败:', err);
            }
          });
        }
      },
      fail: (err) => {
        console.error('订阅失败:', err);
      }
    });
  }
});