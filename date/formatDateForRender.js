"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForRender = void 0;
var DateFormatEnum_1 = require("./DateFormatEnum");
var parseDateFromIsoString_1 = require("./parseDateFromIsoString");
var convertDateToStringByTz_1 = require("./convertDateToStringByTz");
var splitDateString_1 = require("./splitDateString");
var formatDateForRender = function (date, _a) {
    var _b = _a === void 0 ? {} : _a, tz = _b.tz, format = _b.format;
    if (!date) {
        return "Invalid Date";
    }
    var dateObject = parseDateFromIsoString_1.parseDateFromIsoString(date);
    var dateStringTz = convertDateToStringByTz_1.convertDateToStringByTz(dateObject, tz);
    var _c = splitDateString_1.splitDateString(dateStringTz), hours = _c.hours, minutes = _c.minutes, month = _c.month, day = _c.day, year = _c.year;
    switch (format) {
        case DateFormatEnum_1.DateFormatEnum.Short:
            return day + "." + month + " " + hours + ":" + minutes;
        case DateFormatEnum_1.DateFormatEnum.Date:
            return day + "." + month + "." + year;
        default:
            return day + "." + month + "." + year + " " + hours + ":" + minutes;
    }
};
exports.formatDateForRender = formatDateForRender;