const MapPolyfil = () => {
  const nums = [1, 2, 3];
  //   const res = nums.map((num,i,nums) => {
  //     return num * 2;
  //   });

  //   console.log(res);

  Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; ++i) {
      temp.push(cb(this[i], i, this));
    }
    return temp;
  };

  const res = nums.myMap((num, i, nums) => {
    return num * 2;
  });

  console.log(res);
};
export default MapPolyfil;
