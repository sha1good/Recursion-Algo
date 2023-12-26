function AnotherExample(array) {
  let low = 0;
  let high = array.length - 1;
  let result = [];

  while (low <= high) {
    if (array[low] < array[high]) {
      result.push(array[low], array[high]);
    } else if (array[low] === array[high]) {
      result.push(array[low]);
    } else {
      result.push(array[high]);
    }
    low++;
    high--;
  }

  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7];

let result = AnotherExample(array);

console.log(result);
