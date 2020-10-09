"use strict";
/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timeUnit_1 = __importDefault(require("./timeUnit"));
const strPreHandling_1 = __importDefault(require("./strPreHandling"));
class TimeNormalizer {
    constructor() {
        this.timeBase = false;
        this.expression = '';
        this.isPreferFuture = true;
    }
    static _preHandling(expression) {
        expression = strPreHandling_1.default.delKeyword(expression, '\\s+'); // 清理空白符
        expression = strPreHandling_1.default.delKeyword(expression, '[的]+'); // 清理语气助词
        expression = strPreHandling_1.default.DBC2CDB(expression); // 全角转半角
        expression = strPreHandling_1.default.numberTranslator(expression); // 大写数字转化
        return expression;
    }
    turnOffPreferFuture() {
        this.isPreferFuture = false;
    }
    getTimeBase() {
        return this.timeBase;
    }
    setTimeBase(s) {
        this.timeBase = s;
    }
    parse(expression, timeBase) {
        this.expression = expression;
        const exp = TimeNormalizer._preHandling(expression);
        if (timeBase) {
            if (typeof timeBase === 'string' || typeof timeBase === 'number') {
                this.timeBase = new Date(timeBase);
            }
            else {
                this.timeBase = timeBase;
            }
        }
        else {
            this.timeBase = new Date();
        }
        const tu = new timeUnit_1.default(exp, this.isPreferFuture, this.timeBase);
        return tu.timeNormalization();
    }
}
exports.default = TimeNormalizer;
