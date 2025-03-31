// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event) => {
  const { phoneNumber, templateId, templateParams } = event;
  const SmsClient = cloud.sms.v20210111.Client;

  const client = new SmsClient({
    credential: {
      secretId: "YOUR_SECRET_ID",
      secretKey: "YOUR_SECRET_KEY",
    },
    region: "ap-guangzhou",
  });

  return client.SendSms({
    PhoneNumberSet: [phoneNumber],
    TemplateId: templateId,
    TemplateParamSet: templateParams,
    SmsSdkAppId: "YOUR_SDK_APP_ID",
    SignName: "YOUR_SIGN_NAME",
  });
};