const client = require('./client');
const Utils = require('kofo-sdk').Utils;

const kofo = {
    kofoId: 'KOFOtsP1YEhXcm45ieDusRHEx1fDdaBPYCDeqTrqiJj4MJwz',
    pubkey: '0302abf5ad5528a035227bc2d43990506df15729bf1cdb32f3e096dc489c51e529',
    secret: 'a4850fbc6e788bf9e66dfc35d4e394290d6047e8ee400f48129f5656c0cb0d66'
};


// maker 对应的 eos 和 eth账号私钥
const privateKey = {
    ETH: '07FED02BDB20EFE5297445472E2AD0647C9E288A5E28A4E0C7C18CEEFC09B470',
    EOS: '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ'
};

//username 由 deviceId, kofoId, nonce, overwrite, timestamp 字段按照首字母排序后加上'&'拼接成字符串
const username = `deviceId=drunken_mac333&kofoId=${kofo.kofoId}&nonce=1&overwrite=1&timestamp=${new Date().getTime()}`;

//password 由secret对username进行椭圆曲线签名
const password = Utils.sign(kofo.secret, username);

client.run(privateKey, {kofoId: kofo.kofoId, username, password}, false, 'maker');
