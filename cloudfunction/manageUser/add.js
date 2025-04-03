const cloud = require('wx-server-sdk');
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
});
const db = cloud.database();
const bcrypt = require('bcryptjs');

exports.main = async (event) => {
  const { username, password } = event;
  const wxContext = cloud.getWXContext();

  // 校验用户名是否重复
  const userCheck = await db.collection('users')
    .where({ username }).count();
  if (userCheck.total > 0) {
    return { code: 400, message: '用户名已存在' };
  }

  // 哈希密码
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // 写入数据库
  try {
    await db.collection('users').add({
      data: {
        username,
        password: hashedPassword,
        openid: wxContext.OPENID,
        createdAt: db.serverDate()
      }
    });
    return { code: 0, message: '注册成功' };
  } catch (err) {
    return { code: 500, message: '数据库写入失败' };
  }
};