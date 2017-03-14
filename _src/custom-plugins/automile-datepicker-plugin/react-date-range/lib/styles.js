'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultClasses = {
    calendar: 'picker__calendar',
    dateRange: 'picker__date-range',
    predefinedRanges: 'picker__predefined-ranges',
    predefinedRangesItem: 'picker__predefined-ranges-item',
    predefinedRangesItemActive: 'picker__predefined-ranges-item-active',
    monthAndYear: 'picker__month-and-year',
    weekDays: 'picker__week-days',
    weekDay: 'picker__week-day',
    days: 'picker__days',
    day: 'picker__day',
    dayActive: 'is-selected',
    dayPassive: 'is-passive',
    dayInRange: 'is-in-range',
    monthAndYearWrapper: 'picker__month-and-year-inner-wrapper',
    prevButton: 'picker__month-and-year-button prev',
    nextButton: 'picker__month-and-year-button next',
    month: 'picker__month-and-year-month',
    monthAndYearDivider: 'picker__month-and-year-divider',
    year: 'picker__month-and-year-year',
    daySunday: 'picker__sunday'
};

exports.defaultClasses = defaultClasses;
var defaultTheme = {
    DateRange: {
        background: '#ffffff',
        borderRadius: '2px',
        boxSizing: 'border-box',
        display: 'block'
    },

    Calendar: {
        background: '#ffffff',
        borderRadius: '2px',
        boxSizing: 'border-box',
        color: '#95a5a6',
        display: 'inline-block',
        letterSpacing: 0,
        padding: 10,
        paddingRight: '8px',
        width: 200
    },

    Day: {
        boxSizing: 'border-box',
        color: '#3d3f40',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: 14,
        letterSpacing: 'initial',
        textAlign: 'center',
        transition: 'none',
        fontWeight: 600
    },

    DayPassive: {
        cursor: 'normal',
        opacity: 0.4
    },

    DayHover: {
        background: '#eee',
        color: '#3d3f40'
    },

    DayToday: {},

    DaySunday: {},

    DayActive: {
        background: '#1ba19f',
        boxShadow: 'none',
        color: '#ffffff',
        transform: 'none'
    },

    DaySelected: {
        background: '#37bcba',
        color: '#ffffff',
        fontWeight: 'bold'
    },

    DayStartEdge: {},

    DayEndEdge: {},

    DayInRange: {
        background: '#37bcba',
        color: '#fff',
        fontWeight: 'bold'
    },

    Weekday: {
        boxSizing: 'border-box',
        color: '#3d3f40',
        display: 'inline-block',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 'initial',
        marginBottom: 7,
        textAlign: 'center'
    },

    MonthAndYear: {
        boxSizing: 'border-box',
        color: '#3d3f40',
        fontSize: 14,
        fontWeight: 600,
        height: 34,
        lineHeight: '18px',
        textAlign: 'center'
    },

    MonthButton: {
        background: '#eee',
        border: 'none',
        borderRadius: '50%',
        boxShadow: 'none',
        boxSizing: 'border-box',
        display: 'block',
        height: 18,
        margin: '0 10px',
        outline: 'none',
        padding: 0,
        width: 18
    },

    MonthArrow: {
        border: '4px solid transparent',
        display: 'block',
        height: 0,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        width: 0
    },

    MonthArrowPrev: {
        borderRightColor: '#777',
        borderRightWidth: '6px',
        marginLeft: 1
    },

    MonthArrowNext: {
        borderLeftColor: '#777',
        borderLeftWidth: '6px',
        marginLeft: 7
    },

    PredefinedRanges: {
        display: 'inline-block',
        margin: 10,
        verticalAlign: 'top',
        width: 140
    },

    PredefinedRangesItem: {
        background: '#ecf0f1',
        backgroundColor: '#fff',
        borderRadius: '2px',
        color: '#37bcba',
        display: 'block',
        fontSize: 14,
        marginBottom: 6,
        padding: 0,
        textDecoration: 'none'
    },

    PredefinedRangesItemActive: {
        color: '#37bcba'
    }
};

exports['default'] = function () {
    var customTheme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var calendarWidth = defaultTheme.Calendar.width;
    var calendarPadding = defaultTheme.Calendar.padding;
    var cellMargin = defaultTheme.Day.margin || 0;

    if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('width')) {
        calendarWidth = customTheme.Calendar.width;
    }

    if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('padding')) {
        calendarPadding = customTheme.Calendar.padding;
    }

    if (customTheme.Day && customTheme.Day.hasOwnProperty('margin')) {
        cellMargin = customTheme.Day.margin;
    }

    var cellSize = (parseInt(calendarWidth) - parseInt(calendarPadding) * 2) / 7 - parseInt(cellMargin) * 2;

    return {
        DateRange: _extends({}, defaultTheme.DateRange, customTheme.DateRange),

        Calendar: _extends({}, defaultTheme.Calendar, customTheme.Calendar),

        Day: _extends({
            width: cellSize,
            height: cellSize,
            lineHeight: cellSize + 'px'
        }, defaultTheme.Day, customTheme.Day),

        DayPassive: _extends({}, defaultTheme.DayPassive, customTheme.DayPassive),

        DayHover: _extends({}, defaultTheme.DayHover, customTheme.DayHover),

        DayToday: _extends({}, defaultTheme.DayToday, customTheme.DayToday),
        DaySunday: _extends({}, defaultTheme.DaySunday, customTheme.DaySunday),

        DayActive: _extends({}, defaultTheme.DayActive, customTheme.DayActive),

        DaySelected: _extends({}, defaultTheme.DaySelected, customTheme.DaySelected),

        DayStartEdge: _extends({}, defaultTheme.DayStartEdge, customTheme.DayStartEdge),

        DayEndEdge: _extends({}, defaultTheme.DayEndEdge, customTheme.DayEndEdge),

        DayInRange: _extends({}, defaultTheme.DayInRange, customTheme.DayInRange),

        Weekday: _extends({
            width: cellSize,
            height: cellSize / 2,
            lineHeight: cellSize / 2 + 'px'
        }, defaultTheme.Weekday, customTheme.Weekday),

        MonthAndYear: _extends({}, defaultTheme.MonthAndYear, customTheme.MonthAndYear),

        MonthButton: _extends({}, defaultTheme.MonthButton, customTheme.MonthButton),

        MonthArrow: _extends({}, defaultTheme.MonthArrow, customTheme.MonthArrow),

        MonthArrowPrev: _extends({}, defaultTheme.MonthArrowPrev, customTheme.MonthArrowPrev),

        MonthArrowNext: _extends({}, defaultTheme.MonthArrowNext, customTheme.MonthArrowNext),

        PredefinedRanges: _extends({}, defaultTheme.PredefinedRanges, customTheme.PredefinedRanges),

        PredefinedRangesItem: _extends({}, defaultTheme.PredefinedRangesItem, customTheme.PredefinedRangesItem),

        PredefinedRangesItemActive: _extends({}, defaultTheme.PredefinedRangesItemActive, customTheme.PredefinedRangesItemActive)
    };
};