"use strict";
// exports.__esModule = true;
// exports.KhmerDate = void 0;

export class KhmerDate {
        constructor(date) {
            this.date = date;
        }
        getDate() {
            var space = this.compareDate() / 1000;
            if (space < 0)
                return "Invalid Input"
            if (space < 60)
                return "\u1798\u17BB\u1793\u1793\u17C1\u17C7\u1794\u1793\u17D2\u178F\u17B7\u1785";
            else if (space < 3600)
                return "".concat(this.toKhmerNumber(Math.floor(space / 60)), "\u1793\u17B6\u1791\u17B8\u1798\u17BB\u1793");
            else if (space < 3600 * 24)
                return "".concat(this.toKhmerNumber(Math.floor(space / 3600)), "\u1798\u17C9\u17C4\u1784\u1798\u17BB\u1793 ");
            else if (space < 3600 * 24 * 7)
                return "".concat(this.toKhmerNumber(Math.floor(space / (3600 * 24))), "\u1790\u17D2\u1784\u17C3\u1798\u17BB\u1793");
            else if (space < 3600 * 24 * 30)
                return "".concat(this.toKhmerNumber(Math.floor(space / (3600 * 24 * 7))), "\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD\u1798\u17BB\u1793");
            else if (space < 3600 * 24 * 365)
                return "".concat(this.toKhmerNumber(Math.floor(space / (3600 * 24 * 7))), "\u1781\u17C2\u1798\u17BB\u1793");
            return "".concat(this.toKhmerNumber(Math.floor(space / (3600 * 24 * 365))), "\u1786\u17D2\u1793\u17B6\u17C6\u1798\u17BB\u1793");
        }
        compareDate() {
            return (new Date()).getTime() - this.date.getTime();
        }
        toKhmerNumber(input) {
            input += "";
            var khmerNum = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
            var rst = "";
            for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                var c = input_1[_i];
                rst += khmerNum[c - 0];
            }
            return rst;
        }
    }

