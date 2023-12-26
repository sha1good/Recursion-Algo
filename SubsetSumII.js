function findSubSet(index, array, data, result) {
    result.push([...data])

  for (let i = index; i < array.length; i++) {
    if (i !== index && array[i] === array[i - 1]) continue;

    data.push(array[i]);

    findSubSet(i + 1, array, data, result);
    data.pop();
  }
}

function SubsetSumII(index, array, []) {
  const result = [];
  findSubSet(index, array, [], result);

  return result;
}

let array = [1, 2, 2, 2,3,3];
let index = 0;

let result = SubsetSumII(index, array, []);

console.log(result);
