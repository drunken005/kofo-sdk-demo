const client = require('./client');
const Utils = require('kofo-sdk').Utils;

//Utils.createKofoId()
const kofo = {
    kofoId: 'KOFOjJSXfX6JFv1GAuVte19oh4mSihsHKoT7LR6HhzTaZ7yA',
    pubkey: '027482970d2cca5175fb748de14387b51c3dbcfb7c2a2cbd569dd1f8cfc30f7421',
    secret: '6172354e05c9567ea9666d8765209b8ca547b98f32ead308e58f39acc6c691f4'
};

// taker 对应的 eos 和 eth账号私钥
const privateKey = {
    ETH: '02DB31472EB7FF0F42C8E815BFAA541CE563AA894CB3A66E4C6616427A6BD954',
    EOS: '5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79'
};

//username 由 deviceId, kofoId, nonce, overwrite, timestamp 字段按照首字母排序后加上'&'拼接成字符串
const username = `deviceId=drunken_mac1&kofoId=${kofo.kofoId}&nonce=1&overwrite=1&timestamp=${new Date().getTime()}`;

//password 由secret对username进行椭圆曲线签名
const password = Utils.sign(kofo.secret, username);


client.run(privateKey, {kofoId: kofo.kofoId, username, password}, false, 'taker');



