function calTip(Am, per) {
  let result = [];

  for (let i = 0; i < per.length; i++) {
    result.push(Math.round((Am * per[i]) / 100));
  }
  return result;
}
console.log(calTip(100, [50, 25, 10]));
