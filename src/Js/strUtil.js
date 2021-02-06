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

    return {
      init: function() {
          console.log(getDisplayText());
      },
      setId: function(id) {
          strUtil.id = id;
      },
      getId: function() {
          return strUtil.id;
      },
      setStr: function(str) {
          strUtil.str = str;
      },
      getStr: function() {
          return strUtil.str;
      }
    };
})($)

strUtil.setStr('aiueo\nkakikukeko');
strUtil.init();
