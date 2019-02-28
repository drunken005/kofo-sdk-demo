# kofo sdk test demo

```bash
    npm i
```

Demo 中实现了 Maker为ETH, Taker为EOS 两个账号跨链交易的sdk调用, taker和maker对应的账号
```bash
MAKER ETH: 0x91C8cBC45D759AE6a826FC434a04b6B7C4Fdd339
MAKER EOS: alice

TAKER ETH: 0x5c7c9E06cf9FAF957FC950887978A9434d0b5ABB
TAKER EOS: drunken
```

### taker
```bash
    node taker.js
```
ps: taker数据存储在cache/taker.json

### maker
```bash
    node maker.js
```
ps: maker数据存储在cache/maker.json

具体调用参考 [**kofo api**](https://github.com/drunken005/kofo-sdk/blob/master/README.md)