  Array.prototype.myFilter = function (callbackFn, thisArg) {
    if (this == null || this == undefined) {
      throw new TypeError("cannot read properties of null or undefined");
    }

    const ToIntegerOrInfinity = function(value) {
      const number = Number(value);

      if(isNaN(number)) {
        return 0;
      }

      if(number === 0 || !isFinite(number)) {
        return number;
      }

      return (typeof Math.trunc === 'function') ? Math.trunc(number) : (number < 0 ? Math.ceil(number) : Math.floor(number)); //if older browser does not have es6 as trunc is in es6
    }

    const toLength = function(value) {
      let len = ToIntegerOrInfinity(value);

      if(len <= 0) {
        return 0;
      }

      return Math.min(len, Math.pow(2, 53) - 1);
    }

    const o = Object(this);
    const len = toLength(o.length);

    if (typeof callbackFn !== "function") {
      throw new TypeError("callbackFn must be a function");
    }

    const res = [];

    for (let i = 0; i < len; i++) {
      if(Object.prototype.hasOwnProperty.call(o, i)) {
        const val = o[i];
        if(callbackFn.call(thisArg, val, i, o)) {
          res.push(val);
        }
      }
    }

    return res;
  };

  export {};