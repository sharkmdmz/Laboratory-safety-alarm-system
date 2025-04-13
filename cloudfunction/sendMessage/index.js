// 云函数入口文件
const getOpenId = require('../getOpenId/index')
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.cloudbase.sendSms({
      env: 'lsas-8gw8pt8p02cb3bd0',
      content: '警告，实验室存在安全隐患，请查看小程序',
      phoneNumberList: ['+8615730381431'], // 接收短信的手机号列表
      smsType: 'Marketing',
      useShortName: true
    })
    return result
  } catch (err) {
    return err
  }
}