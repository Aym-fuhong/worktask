'use strict';

var parseNumber = function (num) {
    var rex_num = /\.[0]+$/;
    if(rex_num.test(num)){
        return parseFloat(num).toFixed(0);
    }else {
        return num
    }
};

var thousands_separators = function (num) {
    num = parseNumber(num).toString();

    part_int = num.split(/\./)[0];
    part_float = /\./.test(num)?num.split(/\./)[1]:null;

    res = "";

    for(var i = part_int.length-1; i>=0; i-=3){
        num1 = part_int[i]?part_int[i]:"";
        num2 = part_int[i-1]?part_int[i-1]:"";
        num3 = part_int[i-2]?part_int[i-2]:"";

        res = ","+num3+num2+num1+res;
    }

    res = res.substr(1,res.length);
    res = res+(part_float?"."+part_float:"");

    res = parseNumber(res);

    return res;
}

module.exports = thousands_separators;
