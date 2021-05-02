"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSymbol = exports.symbols = void 0;
exports.symbols = {
    USD: "$",
    RUB: "₽",
    KZT: "₸",
    PLN: "zł",
    EUR: "€",
    CZK: "Kč",
};
var getSymbol = function (currency) {
    if (currency === void 0) { currency = ""; }
    return !!currency.match(/usdt/i) ? "USDT" : exports.symbols[currency] || currency;
};
exports.getSymbol = getSymbol;