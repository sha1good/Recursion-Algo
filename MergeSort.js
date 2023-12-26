

function Merge(array, low, mid, high) {
  console.log("From Merge", low, mid, high + "\n")
  let left = low; // starting index of left half of arr
  let right = mid + 1; // starting index of right half of arr
  let temp = [];

  //storing elements in the temporary array in a sorted manner//
  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }

  // if elements on the left half are still left //
  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }

  //  if elements on the right half are still left //
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  //console.log(temp)

  // transfering all elements from temporary to arr //
  for (let i = low; i <= high; i++) {
    array[i] = temp[i - low];  // i.e  0-0,  1-0 
  }
  return array;
}

function MergeSort(array, low, high) {
  
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  console.log("From MergeSort", low, mid, high + "\n")
  
  MergeSort(array, low, mid); //  is completely for the any left half of the mergeSort
  MergeSort(array, mid + 1, high); // is completely for any right half of the mergeSort 
  let result = Merge(array, low, mid, high); // merging sorted halves
  return result;
}

function mergingTheSort(array) {
  return MergeSort(array, 0, array.length - 1);
}

let array = [9, 4, 7, 6, 3, 1, 5];
let result = mergingTheSort(array);

console.log("The result after merging: ", result);
