function CountInversionInArray(array) {
  let N = array.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
   
    for (let j = i + 1; j < N; j++) {
      if (array[i] > array[j]) {
        count += 1;
      }
    }
   
  }
  return count;
 
}

let array = [5,4,3,2,1];


//Time Complexity: O(N2), where N = size of the given array.
//Reason: We are using nested loops here and those two loops roughly run for N times.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log(CountInversionInArray(array));



function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    let cnt = 0;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left += 1;
        } else {
            temp.push(arr[right]);
            cnt += mid - left + 1;  
            // this is one of my target e.g 3,4,5     1, 2 = == 2 - 0 + 1 for the first element(3,1), 2 - 0 + 1  for second element (3,2)
            right += 1;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left += 1;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right += 1;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    return cnt;
}

function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) {
        return cnt;
    }

    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid);
    cnt += mergeSort(arr, mid + 1, high);
    cnt += merge(arr, low, mid, high);
    return cnt;
}

function numberOfInversions(a) {
    let n = a.length;
    return mergeSort(a, 0, n - 1);
}

let a = [5, 4, 3, 2, 1];
let cnt = numberOfInversions(a);
console.log("The number of inversions are:", cnt);
