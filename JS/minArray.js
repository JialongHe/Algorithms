var minArray = function (numbers) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let mid = left + (right - left >> 1 );
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if(numbers[mid] > numbers[right]){
      left = mid + 1;
    }else{
        right --;
    }
  }
  return numbers[left]
};
