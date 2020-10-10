"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
const timeUnit_1 = __importDefault(require("./timeUnit"));
const strPreHandling_1 = __importDefault(require("./strPreHandling"));
class TimeNormalizer {
    constructor() {
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
        // const result = new Date(expression)
        // 如果 result 不为 Invalid Date ，说明原字符串已经是标准时间格式了
        // if (result.toString() !== 'Invalid Date') {
        //     return dayjs(result).format('YYYY-MM-DD HH:mm:ss')
        // }
        const exp = TimeNormalizer._preHandling(expression);
        if (timeBase && (typeof timeBase === 'string' || typeof timeBase === 'number' || timeBase instanceof Date)) {
            this.timeBase = new Date(timeBase);
        }
        else {
            this.timeBase = new Date();
        }
        const tu = new timeUnit_1.default(exp, this.isPreferFuture, this.timeBase);
        return tu.timeNormalization();
    }
}
exports.default = TimeNormalizer;
