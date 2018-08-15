"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THOUSAND = 1e3;
exports.LAKH = 1e5;
exports.CRORE = 1e7;
exports.MILLION = 1e6;
exports.BILLION = 1e9;
exports.humanize = function (num) {
    var _humanize = function (n, symbol) {
        var k = n.toString().split('.');
        if (k.length === 1) {
            return "" + k[0] + symbol;
        }
        else if (k[1][0] === "0") {
            return "" + k[0] + symbol;
        }
        return k[0] + "." + k[1][0] + symbol;
    };
    if (isNaN(num)) {
        return "NaN";
    }
    if (num >= exports.CRORE) {
        return _humanize(num / exports.CRORE, 'C');
    }
    else if (num >= exports.LAKH) {
        return _humanize(num / exports.LAKH, 'L');
    }
    else if (num >= exports.THOUSAND) {
        return _humanize(num / exports.THOUSAND, 'K');
    }
    return num.toString();
};
