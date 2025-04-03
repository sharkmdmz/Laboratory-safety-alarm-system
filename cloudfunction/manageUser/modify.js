const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });
const db = cloud.database();
const bcrypt = require('bcryptjs');

exports.main = async (event) => {
  const { oldPwd, newPwd } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  // 查询当前用户信息
  const userRes = await db.collection('users')
    .where({ openid })
    .get();

  if (userRes.data.length === 0) {
    return { code: 404, message: '用户不存在' };
  }

  // 校验旧密码是否正确
  const user = userRes.data[0];
  const isPwdValid = bcrypt.compareSync(oldPwd, user.password);
  if (!isPwdValid) {
    return { code: 401, message: '原密码错误' };
  }

  // 生成新密码哈希
  const salt = bcrypt.genSaltSync(10);
  const newHashedPwd = bcrypt.hashSync(newPwd, salt);

  // 更新数据库
  try {
    await db.collection('users').doc(user._id).update({
      data: {
        password: newHashedPwd,
        updatedAt: db.serverDate()
      }
    });
    return { code: 0, message: '密码已更新' };
  } catch (err) {
    return { code: 500, message: '密码更新失败' };
  }
};