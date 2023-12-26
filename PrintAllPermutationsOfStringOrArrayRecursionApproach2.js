function swap(element1, element2, array) {
  let temp = array[element1];
  
  array[element1] = array[element2];
  array[element2] = temp;
  return array;
}

function recurPermutate(index, array, result) {
  if (index === array.length) {
     let data = []

     for(let i=0; i < array.length; i++){
         data.push(array[i])
     }

     result.push([...data])
      return;
  }

  for (let i = index; i < array.length; i++) {
   console.log(index)
   console.log(i)
   console.log("==================")
    swap(i, index, array);
    recurPermutate(index + 1, array, result);
    swap(i, index, array);
  }
}

function PrintAllPermutationsOfStringOrArrayRecursionApproach2(array, data) {
  const result = [];
  recurPermutate(0, array, result);
  return result;
}

let array = [1, 2, 3];

let result = PrintAllPermutationsOfStringOrArrayRecursionApproach2(array, []);

console.log(result);
