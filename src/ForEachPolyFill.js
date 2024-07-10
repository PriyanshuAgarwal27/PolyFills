const ForEachPolyFill = () => {
  const nums = [1, 2, 3];
  //   nums.forEach((num, i, nums) => {
  //     console.log(num);
  //   });
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; ++i) {
      cb(this[i], i, this);
    }
  };
  nums.myForEach((num, i, nums) => {
    console.log(num);
  });
};
export default ForEachPolyFill;
