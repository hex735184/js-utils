"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForRenderFromString = void 0;
var parseDateFromIsoString_1 = require("./parseDateFromIsoString");
var formatDateForRenderFromObject_1 = require("./formatDateForRenderFromObject");
var formatDateForRenderFromString = function (date, _a) {
    var _b = _a === void 0 ? {} : _a, tz = _b.tz, format = _b.format;
    if (!date || typeof date !== "string") {
        return "Invalid Date";
    }
    return (0, formatDateForRenderFromObject_1.formatDateForRenderFromObject)((0, parseDateFromIsoString_1.parseDateFromIsoString)(date), {
        tz: tz,
        format: format,
    });
};
exports.formatDateForRenderFromString = formatDateForRenderFromString;
