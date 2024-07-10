const ReducePolyFill = () => {
  const nums = [1, 2, 3];
  //   const res = nums.reduce((acc, curr, i, nums) => {
  //     return acc + curr;
  //   }, 0);
  //   console.log(res);

  Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    for (let i = 0; i < this.length; ++i) {
      acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
  };
  const res = nums.myReduce((acc, curr, i, nums) => {
    return acc + curr;
  }, 0);
  console.log(res);
};
export default ReducePolyFill;
