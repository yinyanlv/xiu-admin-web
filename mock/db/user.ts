import mock from '../mock';
import jwt from 'jsonwebtoken';

const jwtTokenConfig = {
    secret: 'xiu',
    expiresIn: '1 days'  // 单位秒，如果使用字符串，可定义为days, hours等
};

const userDb = [{
    username: 'admin',
    password: '111111',
    role: 'admin'
}];

mock.onPost('/api/login').reply((req) => {
    const params = JSON.parse(req.data);

    const users = userDb.filter((item) => {
        if (item.username === params.username && item.password === params.password) {
            return true;
        } else {
            return false;
        }
    });
    const isValid = users.length ? true : false;

    if (isValid) {
        users[0].accessToken = jwt.sign({username: users[0].username}, jwtTokenConfig.secret, {expiresIn: jwtTokenConfig.expiresIn});
    }

    const result = isValid ? {
        success: true,
        result: users[0]
    } : {
        success: false,
        message: '用户名或密码错误'
    };
    return [200, result];
});
