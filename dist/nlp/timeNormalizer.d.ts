/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
export default class TimeNormalizer {
    timeBase: boolean | Date;
    expression: string;
    isPreferFuture: boolean;
    constructor();
    static _preHandling(expression: string): string;
    turnOffPreferFuture(): void;
    getTimeBase(): boolean | Date;
    setTimeBase(s: boolean | Date): void;
    parse(expression: string, timeBase?: string | number | boolean | Date): string | false;
}
