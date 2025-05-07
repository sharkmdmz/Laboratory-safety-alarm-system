const cloud = require('wx-server-sdk');
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
});
const db = cloud.database();
const bcrypt = require('bcryptjs');

exports.main = async (event) => {
  const { account, password } = event; // account可以是用户名或邮箱
  const users = db.collection('users');
  
  try {
    // 查询用户是否存在（支持用户名或邮箱登录）
    const query = {
      $or: [
        { username: account },
        { email: account }
      ]
    };
    
    const userResult = await users.where(query).get();
    
    if (userResult.data.length === 0) {
      return { 
        code: 404, 
        message: '用户不存在，请检查用户名/邮箱' 
      };
    }
    
    const user = userResult.data[0];
    
    // 验证密码
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    
    if (!isPasswordValid) {
      return { 
        code: 401, 
        message: '密码错误' 
      };
    }
    
    // 登录成功，返回用户基本信息（不返回密码）
    return {
      code: 0,
      message: '登录成功',
      data: {
        userId: user._id,
        username: user.username,
        email: user.email,
        openid: user.openid,
        createdAt: user.createdAt
      }
    };
    
  } catch (err) {
    console.error('登录错误:', err);
    return { 
      code: 500, 
      message: '登录失败，请稍后再试' 
    };
  }
};