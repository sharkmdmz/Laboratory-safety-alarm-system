// 云函数入口文件
const add = require('./add.js')
const modify = require('./modify.js')
const cloud = require('wx-server-sdk')

cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  switch(event.type){
    case "add":
      return await add.main(event,context);
    case "modify":
      return await modify.main(event,context);
  }
}