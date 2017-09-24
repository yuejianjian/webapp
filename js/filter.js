
//取整
starter.filter('roundingFilter', function() {
    return function(value) {
        var result = value;
        if (value && value.length > 0) {
            result = Math.round(value);
        }
        return result;
    }
});

//标签解析
starter.filter('unescapeHTML', function() {
    return function(value) {
        value=""+value;
        return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    }
});



/**
 * 手机号*显，显示首3位和末4位
 */
starter.filter('mobileFilter', function() {
    return function(value) {
        var result = "";
        if (value && value.length >= 11) {
            for (var i = 0; i < value.length; i++) {
                if (i < 3 || i >= value.length - 4) {
                    result += value[i];
                } else {
                    result += "*";
                }
            }
        } else {
            //console.log('手机号格式不正确');
            //手机号格式不正确
        }
        return result;
    }
});


starter.filter("last4", function() {
    return function(value) {
        if (!value) return;
        return value.substr(-4, value.length);
    }
});

starter.filter("percent", function() {
    return function(value) {
        if (!value) return "0.00";
        return value + "%";
    }
})

