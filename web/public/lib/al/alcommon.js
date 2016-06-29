var ALCOMMON = function(){
    function GetUrlVars() {
        var vars = [], hash;
        var url = decodeURIComponent(window.location.href);
        var hashes = url.slice(url.indexOf('?') + 1).split('&');

        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            // vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }

        return vars;
    }

    function GetQRcode(width, height, content) {
        // 預設寬高為 120x120
        width = !!width ? width : 120 ;
        height = !!height ? height : 120;
        // 編碼
        content = encodeURIComponent(content);
        return 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
    };

    function InsertJS(src, callback) {
        callback = callback || function(){};
        var script = '<script src="@src"></script>'.replace(/@src/, src);
        
        $('body').append(script).promise().done(callback);
    };

    this.GetUrlVars = GetUrlVars;
    this.GetQRcode = GetQRcode;
    this.InsertJS = InsertJS;

    return this;
};