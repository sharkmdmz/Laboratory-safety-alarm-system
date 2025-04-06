// 云函数 send-notification/index.js
const cloud = require('wx-server-sdk');
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV
});
console.log(112132);
exports.main = async (event) => {
  console.log(event);
  const { openid } = event.userInfo;
  const templateId = 'pZmqyStCEtbRKoMMmyo5IvW80BfCiacOjqHr3_JLygw';
  try {
    await cloud.openapi.subscribeMessage.send({
      touser: openid,
      templateId: templateId,
      page: 'pages/warning/warning', // 点击通知跳转的小程序页面
      data: {
        time2: { value: new Date().toLocaleString() },  // 对应模板参数
        thing3: { value: 'DS1302' },
        thing9: { value: '有xx风险' }
      },
      miniprogramState: 'developer'//完成时要把这一行删掉
    });
    return { code: 0, message: '通知发送成功' };
  } catch (err) {
    return { code: -1, message: '通知发送失败', error: err };
  }
};