const cloud = require('wx-server-sdk');
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
});
const db = cloud.database();
const bcrypt = require('bcryptjs');

exports.main = async (event) => {
  console.log(event);
  const { username, password , email} = event;
  const wxContext = cloud.getWXContext();
  const users = db.collection('users')
  // 校验用户名是否重复
  const userCheck = await users.where({ username }).count();
  if (userCheck.total > 0) {
    return { code: 400, message: '用户名已存在' };
  }

  const emailCheck = await users.where({ email }).count();
  if (emailCheck.total > 0) {
    return { code: 400, message: '邮箱已被注册' };
  }

  // 哈希密码
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // 写入数据库
  try {
    await users.add({
      data: {
        username,
        email,
        password: hashedPassword,
        openid: wxContext.OPENID,
        createdAt: db.serverDate()
      }
    });
    return { code: 0, message: '注册成功' };
  } catch (err) {
    return { code: 500, message: '注册失败' };
  }
};