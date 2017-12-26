;(function() {
    'use strict';

    function result(args, type) {
    	var argsArr = Array.prototype.slice.call(args);  // 获取所有参数
      if(argsArr.length == 0) return 0;
      switch(type) {
          case 1: return argsArr.reduce(function(p,c){return p + c;});
          case 2: return argsArr.reduce(function(p,c){return p - c;});
          case 3: return argsArr.reduce(function(p,c){return p * c;});
          case 4: return argsArr.reduce(function(p,c){return p / c;});
          case 5: return argsArr.reduce(function(p,c){return p % c;});
          default: return 0;
      }
    }

    function CPCalculator() {}
    CPCalculator.prototype = {
        constructor: CPCalculator,
        add: function() { return result(arguments, 1); }, // 加法
        sub: function() { return result(arguments, 2); }, // 减法
        mul: function() { return result(arguments, 3); }, // 乘法
        div: function() { return result(arguments, 4); }, // 除法
        sur: function() { return result(arguments, 5); }  // 求余

    }

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function() {
            return CPCalculator;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports.CPCalculator = CPCalculator;
    } else {
        window.CPCalculator = CPCalculator;
    }
}());