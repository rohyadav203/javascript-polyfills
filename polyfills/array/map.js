// if (Array.prototype.map) {
  Array.prototype.map1 = function (callbackFn, thisArg) {
    if (this == null || this == undefined) {
      throw new TypeError("cannot read properties of null or undefined");
    }

    const o = Object(this);
    const len = Math.max(
      0,
      Math.min(Number(o.length) || 0, Number.MAX_SAFE_INTEGER),
    );

    if(typeof callbackFn !== 'function') {
        throw new TypeError("callbackFn must be an function");
    }

    const res = new Array(len);
    for(let i = 0; i < len; i++) {
        if(i in o) {
            let val = o[i];
            let mappedVal = callbackFn.call(thisArg, val, i, o);
            res[i] = mappedVal;
        }
    }

    return res;
  };
// }

const mapArr = [1,2,,3,undefined,4,5,6,7].map1((x) => {
    return x*2;
})

console.log(mapArr);

// const mapArr1 = [1,2,,3,undefined,4,5,6,7].map((x) => {
//     return x*2;
// })

// console.log(mapArr1.length);
// console.log(mapArr1);
