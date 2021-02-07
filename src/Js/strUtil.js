var strUtil = (function ($) {
    /**
     * 表示テキスト
     */
    function getDisplayText() {
        var split = strUtil.getStr().split('\n');
        if (split['0'] && split['1'] && split['0'].length && split['1'].length) { // 改行指定あり
            return createDisplayFirstText(split['0'], true) + createDisplaySecondText(split['1']);

        } else if (split['0'] && split['0'].length) {　 // 改行指定なし
            return createDisplayFirstText(split['0'], false);

        } else {
            return '';
        }
    }

    /**
     * 1行目
     */
    function createDisplayFirstText(target, isNewLine) {
        if (target.length >= 7 && !isNewLine) { // 7文字以上 で改行指定なし
            return target.substr(0, 6) + '<br>' + target.substr(7, 5) + '...';

        } else if (target.length >= 7 && isNewLine) { // 7文字以上　改行指定アリ
            return target.substr(0, 6)　+ '<br>';

        } else if (isNewLine) { // 6文字以下 改行指定あり
            return target + '<br>';

        } else {
            return target;
        }
    }

    /**
     * 2行目
     */
    function createDisplaySecondText (target) {
        if (target.length >= 7) { // 7文字以上
            return target.substr(0, 5) + '...';

        } else { // 6文字 or 6文字以下
            return target;
        }
    }
    /**
     * 全角1文字・半角0.5文字デ数える
     */
    function getStrLen(str) {
        let count = 0;
        for (let i = 0, len = str.length; i < len; i++) {
            let c = str.charCodeAt(i);
            //console.log(i + '::' + c);
            if (!str[i].match(/\r?\n/g)) { // 改行コード判定
      	        if (c >= 0x0 && c <= 0x7f) { // 全角半角判定
        	        count += 0.5
      	        } else {
        	        count += 1
      	        }
    	    }
        }
        return count;
    }
    
    return {
      init: function() {
          console.log(getDisplayText());
      },
      setStr: function(str) {
          strUtil.str = str;
      },
      getStr: function() {
          return strUtil.str;
      },
      getStrCount: function() {
          return getStrLen(strUtil.getStr());
      }
    };
})($)

strUtil.setStr('aiueo\nkakikukeko');
strUtil.init();
