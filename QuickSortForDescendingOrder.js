//Step of QuickSort Algorithms
//1. Pick up the pivot/ pertition Index and place it in the correct order in the Array

//Pivot can  be the first element in the array, or the median or last, random  element in the array

// 2. Smaller on the left and larger on the right

function pertitionFunction(array, low, high) {
  let i = low;
  let j = high;

  let pivot = array[low];

  while (i <= j) {
    while (array[i] >= pivot && i <= high) {
      i++; //  Meaning we are yet to find any element  that is greater than pivot, once we find one, we will break out of the while loop
    }

    while (array[j] < pivot && j >= low) {
      j--;
    }

    if (i < j) {
      // Swap elements
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  console.log(array + "\t");
  //pivot is greater than array of the current value of j

  // Swap pivot into its correct position
  [array[low], array[j]] = [array[j], array[low]];
  return j;
}

function QS(array, low, high) {
  if (low < high) {
    let partitionIndex = pertitionFunction(array, low, high);
    QS(array, low, partitionIndex - 1); //  this will sort  the unsorted  left side
    QS(array, partitionIndex + 1, high); //  this will sort  the unsorted  right side
  }
  return;
}

function QuickSort(array) {
  QS(array, 0, array.length - 1);

  return array;
}

let array = [4,5,2,1,6,3,7,9];


//Time complexity is O(NlogN)
//Space Complexity is O(1)
let result = QuickSort(array);

console.log(result.join(" "));
