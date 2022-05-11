/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
import TimePoint from './timePoint';
declare class TimeUnit {
    timeExpression: string;
    _tp: TimePoint;
    timeBase: Date;
    isPreferFuture: boolean;
    _tpOrigin: TimePoint;
    isFirstTimeSolveContext: boolean;
    isAllDayTime: boolean;
    /**
     * 时间表达式单元构造方法
     * 该方法作为时间表达式单元的入口，将时间表达式字符串传入
     *
     */
    constructor(expTime: string, isPreferFuture: boolean, timeBase: Date);
    /**
     * 根据上下文时间补充时间信息
     */
    _checkContextTime(checkTimeIndex: number): void;
    /**
     * 如果用户选项是倾向于未来时间，检查checkTimeIndex所指的时间是否是过去的时间，如果是的话，将大一级的时间设为当前时间的+1。
     * <p>
     * 如在晚上说“早上8点看书”，则识别为明天早上;
     * 12月31日说“3号买菜”，则识别为明年1月的3号。
     *
     * @param checkTimeIndex _tp.tunit时间数组的下标
     */
    _preferFuture(checkTimeIndex: number): void;
    /**
     * 如果用户选项是倾向于未来时间，检查所指的day_of_week是否是过去的时间，如果是的话，设为下周。
     * <p>
     * 如在周五说：周一开会，识别为下周一开会
     *
     * @param weekday 识别出是周几（范围1-7）
     */
    _preferFutureWeek(weekday: number): void;
    /**
     * 年-规范化方法
     * <p>
     * 该方法识别时间表达式单元的年字段
     */
    normSetYear(): void;
    /**
     * 月-规范化方法
     * <p>
     * 该方法识别时间表达式单元的月字段
     */
    normSetMonth(): void;
    /**
     * 月-日 兼容模糊写法
     * <p>
     * 该方法识别时间表达式单元的月、日字段
     * <p>
     * add by kexm
     */
    normSetMonthFuzzyDay(): void;
    /**
     * 日-规范化方法
     * <p>
     * 该方法识别时间表达式单元的日字段
     */
    normSetDay(): void;
    /**
     * 时-规范化方法
     * <p>
     * 该方法识别时间表达式单元的时字段
     */
    normSetHour(): void;
    /**
     * 分-规范化方法
     * <p>
     * 该方法识别时间表达式单元的分字段
     */
    normSetMinute(): void;
    /**
     * 秒-规范化方法
     * <p>
     * 该方法识别时间表达式单元的秒字段
     */
    normSetSecond(): void;
    /**
     * 特殊形式的规范化方法
     * <p>
     * 该方法识别特殊形式的时间表达式单元的各个字段
     */
    normSetTotal(): void;
    /**
     * 设置以上文时间为基准的时间偏移计算
     */
    normSetBaseRelated(): void;
    /**
     * 设置当前时间相关的时间表达式
     */
    normSetCurRelated(): void;
    /**
     * 该方法用于更新timeBase使之具有上下文关联性
     */
    modifyTimeBase(): void;
    /**
     * 时间表达式规范化的入口
     * 时间表达式识别后，通过此入口进入规范化阶段，
     * 具体识别每个字段的值
     */
    timeNormalization(): string | false;
}
export default TimeUnit;
