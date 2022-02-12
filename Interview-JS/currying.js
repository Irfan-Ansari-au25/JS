function add(x) {
  sum = x;
  return function res(y) {
    sum += y;
    res.result = sum;
    return res;
  };
}

console.log(add(2)(3)(4).result);
