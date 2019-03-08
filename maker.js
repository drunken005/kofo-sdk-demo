const client = require('./client');
const Utils = require('kofo-sdk').Utils;

//Utils.createKofoId()
const kofo = {
    kofoId: 'KOFOir2cYV9svCmFnhbSySUUDjqNb6BdoFx87pNVapi9UUFi',
    pubkey: '026dbe727dd7ac0cdf51ac283c5a983ec835942cebaa8d97b8b72fc8420a00c1b9',
    secret: 'f6d5bfd6abb8d95b345105ca6e36dc10339e8129958304bee5818c1115034ca1'
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

client.run(privateKey, {kofoId: kofo.kofoId, username, password}, true, 'maker');
