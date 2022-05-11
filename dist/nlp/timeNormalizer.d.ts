export default class TimeNormalizer {
    timeBase: Date;
    expression: string;
    isPreferFuture: boolean;
    constructor();
    static _preHandling(expression: string): string;
    turnOffPreferFuture(): void;
    getTimeBase(): Date;
    setTimeBase(s: Date): void;
    parse(expression: string, timeBase?: string | number | Date): string | false;
}
