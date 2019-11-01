import mock from '../mock';

const userDb = [{
    username: 'admin',
    password: '111111'
}];

mock.onPost('/api/login').reply((req) => {
    const params = JSON.parse(req.data);

    const isValid = userDb.some((item) => {
        if (item.username === params.username && item.password === params.password) {
            return true;
        } else {
            return false;
        }
    });
    const result = isValid ? {
        success: true,
        result: params
    } : {
        success: false,
        message: '用户名或密码错误'
    };
    return [200, result];
});
