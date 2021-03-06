class Identifier {
    constructor(chain, currency){
        this.chain    = chain ? chain.toLowerCase() : chain;
        this.currency = currency ? currency.toLowerCase() : currency;
    }

    toString(){
        return this.isToken ? `${this.chain}|TOKEN` : this.toStringChainCurrency();
    }

    toStringChainCurrency(){
        return `${this.chain}|${this.currency}`;
    }

    get isToken(){
        return Boolean(this.chain !== this.currency);
    }
}

module.exports = Identifier;
