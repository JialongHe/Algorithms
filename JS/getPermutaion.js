var getPermutation = function (n, k) {
  const nums = [];
  let res = "";
  let fac = 1;

  for (let i = 1; i <= n; i++) {
    nums[i - 1] = i;
    fac = fac * i;
  }
  k--;
  while (nums.length) {
    fac /= nums.length;
    const index = parseInt(k / fac);
    k %= fac;
    res += nums[index];
    nums.splice(index, 1);
  }
  return res;
};