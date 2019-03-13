const utils = require('kofo-sdk').Utils;
let s = utils.createPreImage();
let h = utils.sha256Twice(s);
console.log({s, h});