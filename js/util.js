
starter
.factory("util", ["$interval", function ($interval) {
    var util = {
        random: function () {
            return Math.ceil(Math.random() * 10);
        },
        countDown: function (config) {
            var options = angular.extend({
                timer: 60
            }, config);
            var interval;
            var fn = {
                run: function (callback, cancelCallback) {
                    if (!interval) {
                        callback(options.timer);
                        interval = $interval(function () {
                            callback(--options.timer);
                            if (options.timer <= 0) {
                                $interval.cancel(interval);
                                cancelCallback();
                                fn.cancel();
                            }
                        }, 1000);
                    }
                },
                cancel: function () {
                    $interval.cancel(interval);
                    options.timer = config.timer;
                    interval = null;
                }
            };
            return fn;
        },
        //字符串转日期
        str2date: function (str, format) {
            var reg = new RegExp("[\u4e00-\u9fa5]|\/|-|:|\s", "g"); //汉字正则表达
            var newDate = new Date();
            if (format) {
                return new Date(
                    str.substr(format.indexOf("yyyy"), 4) ? str.substr(format.indexOf("yyyy"), 4) : newDate.getFullYear(),
                    str.substr(format.indexOf("MM"), 2) ? str.substr(format.indexOf("MM"), 2) - 1 : newDate.getMonth(),
                    str.substr(format.indexOf("dd"), 2) ? str.substr(format.indexOf("dd"), 2) : newDate.getDate(),
                    str.substr(format.indexOf("HH"), 2) ? str.substr(format.indexOf("HH"), 2) : 0,
                    str.substr(format.indexOf("mm"), 2) ? str.substr(format.indexOf("mm"), 2) : 0,
                    str.substr(format.indexOf("ss"), 2) ? str.substr(format.indexOf("ss"), 2) : 0,
                    str.substr(format.indexOf("SSS"), 3) ? str.substr(format.indexOf("SSS"), 3) : 0
                )
            } else {
                str = str.replace(/[\u4e00-\u9fa5]|\/|-|:|\s/g, "");
                return new Date(
                    str.substr(0, 4) ? str.substr(0, 4) : newDate.getFullYear(),
                    str.substr(4, 2) ? str.substr(4, 2) - 1 : newDate.getMonth(),
                    str.substr(6, 2) ? str.substr(6, 2) : newDate.getDate(),
                    str.substr(8, 2) ? str.substr(8, 2) : 0,
                    str.substr(10, 2) ? str.substr(10, 2) : 0,
                    str.substr(12, 2) ? str.substr(12, 2) : 0,
                    str.substr(16, 3) ? str.substr(16, 3) : 0
                )
            }
        },
        //把秒数转换为 *天*小时*分钟*秒 的形式
        getDHMS: function (dif) {
            var d = Math.floor(dif / 3600 / 24);
            var h = Math.floor((dif / 3600) % 24);
            var m = Math.floor((dif / 60) % 60);
            var s = Math.floor(dif % 60);
            return {
                days: d,
                hours: h,
                mins: m,
                seconds: s,
                dif: dif
            }
        },
        //日期格式化
        dateFormat: function (date, fmt) {
            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },
        //日期重新格式化
        dateStrReformat: function (dateStr, srcPattern, targetPattern) {
            if (!dateStr) return "";
            var date = this.str2date(dateStr, srcPattern);
            var targetDateStr = this.dateFormat(date, targetPattern);
            return targetDateStr;
        },
        //日期计算
        dateCount: function (date, num, unit) {//时间加减 nies
            if (typeof date == "string") {
                date = this.str2date(date, "yyyyMMddHHmmss");
            }
            switch (unit) {
                case "y":
                    date.setFullYear(date.getFullYear() + num);
                    break;
                case "M":
                    date.setMonth(date.getMonth() + num);
                    break;
                case "d":
                    date.setDate(date.getDate() + num);
                    break;
                case "h":
                    date.setHours(date.getHours() + num);
                    break;
                case "m":
                    date.setMinutes(date.getMinutes() + num);
                    break;
                case "s":
                    date.setSeconds(date.getSeconds() + num);
                    break;
                case "S":
                    date.setMilliseconds(date.getMilliseconds() + num);
            }
            return date;
        },
        // 判断数组内是否存在某个值
        isContain: function (array, val) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === val) {
                    return true;
                }
            }
            return false;
        },
        filterUrl: function (url) {
            url = url.replace("%", "%25");
            url = url.replace("/", "%2F").replace("?", "%3F").replace("#", "%23").replace("&", "%26").replace("=", "%3D");
            return url;
        }
    };
    return util;
}])

