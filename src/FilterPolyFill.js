const FilterPolyFill = () => {
  const nums = [1, 2, 3];
  // const res = nums.filter((num, i, nums) => {
  //   return num % 2 != 0;
  // });
  // console.log(res);

  Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; ++i) {
      if (cb(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
    return temp;
  };

  const res = nums.myFilter((num, i, nums) => {
    return num % 2 != 0;
  });
  console.log(res);
};
export default FilterPolyFill;
