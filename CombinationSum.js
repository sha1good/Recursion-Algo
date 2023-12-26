function findCombination(array, index, target, ds) {
  //Check if the index has reached the length of the array given,
  // This si where you will now later determined whether to pick new element of not
  //And our target is equal to 0, that means I have reached my target using the array
  if (index === array.length) {
    if (target === 0) {
       console.log(ds.join(", ") + "\n")
    }

    return;
  }

  // at this point, I have picked an element  from the array
  if (array[index] <= target) {
    ds.push(array[index]);
    findCombination(array, index, target - array[index], ds);
    ds.pop(array.length - 1); // remove the previous element that I added
  }

  //// at this point, I have removed the previous element added to  the ds array and move on to the next index
  findCombination(array, index + 1, target, ds);
}



let array = [2, 3, 6, 7];
let target = 7;
let ds = [];
let index = 0;


//Time complexity is O(2 raised to power n )
findCombination(array, index, target, ds);

//console.log(res);
