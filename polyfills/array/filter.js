if (Array.prototype.filter) {
  Array.prototype.filter1 = function (callbackFn, thisArg) {
    if (this == null || this == undefined) {
      throw new TypeError("cannot read properties of null or undefined");
    }

    const o = Object(this);
    const len = Math.max(
      0,
      Math.min(Number(o.length) || 0, Number.MAX_SAFE_INTEGER),
    );

    if (typeof callbackFn !== "function") {
      throw new TypeError("calllbackFn must be a function");
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
}


const filterArr = [1, , 2, 3, 4].filter1((x) => {
  return x > 1;
});

console.log(filterArr);