/**
 *Intro: 工具类
 *Author:shine
 *Date:2017/11/1
 */
declare const util: {
    ONE_MINUTE_MILLISECOND: number;
    ONE_HOUR_MILLISECOND: number;
    ONE_DAY_MILLISECOND: number;
    ONE_WEEK_MILLISECOND: number;
    ONE_MONTH_MILLISECOND: number;
    ONE_YEAR_MILLISECOND: number;
    zodiacArray: string[];
    constellationArray: string[];
    constellationEdgeDay: number[];
    isEmptyStr: (str: string) => boolean;
    zeroPad: (digits: number, n: number) => string;
    reverseStr: (str: string) => string;
    isLeapYear: (year: number) => boolean;
    year2Zodica: (year: number) => string;
    date2Zodica: (date: string | number | Date) => string;
    date2Constellation(date: string | number | Date): string;
    /**
     * 是否是今天
     * @param date
     */
    isToday: (date: any) => boolean;
    /**
     * 获得指定时间那天的某个小时（24小时制）的整点时间
     */
    getSpecificHourInTheDay: (date: string | number | Date, hourIn24: number) => Date;
    /**
     * 取周一
     */
    getFirstDayOfWeek: (date: string | number | Date) => Date;
    /**
     * 获取相对多少分钟后的日期
     * @param date
     * @param AddMinuteCount
     * @return {Date}
     */
    getDateAfterMinutes: (date: any, AddMinuteCount: any) => Date;
    /**
     * 获取相对多少小时后的日期
     * @param date
     * @param AddHourCount
     * @return {Date}
     */
    getDateAfterHours: (date: any, AddHourCount: any) => Date;
    /**
     * 获取相对多少天后的日期
     * @param date
     * @param AddDayCount
     * @return {Date}
     */
    getDateAfterDays: (date: string | number | Date, AddDayCount: number) => Date;
    /**
     * 获取相对多少星期后的日期
     * @param date
     * @param AddWeekCount
     * @param weekDay
     * @return {Date}
     */
    getDateAfterWeeks: (date: string | number | Date, AddWeekCount: number, weekDay: number) => Date;
    /**
     * 获取相对多少月后的日期
     * @param date
     * @param AddMonthCount
     * @return {Date}
     */
    getDateAfterMonths: (date: string | number | Date, AddMonthCount: number) => Date;
    /**
     * 获取相对多少年后的日期
     * @param date
     * @param AddYearCount
     * @return {Date}
     */
    getDateAfterYears: (date: string | number | Date, AddYearCount: number) => Date;
    /**
     * 某一天开始时间
     */
    dayBegin: (date: any) => Date;
    /**
     * 某一天结束时间
     */
    dayEnd: (date: string | number | Date) => Date;
    /**
     * 判断是否某一天
     * @param date
     * @param day
     * @return {boolean}
     */
    isTheDay: (date: string | number | Date, day: any) => boolean;
    /**
     * 格式化时间
     * @param date
     * @return {string}
     */
    formatDateDefault: (date: string | number | Date) => string;
    /**
     * 检测日期格式字符串是否合法
     * @param strDateTime
     * @return {boolean}
     */
    checkDateFormatAndValite: (strDateTime: string) => boolean;
};
export default util;
