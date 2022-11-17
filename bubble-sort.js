let notSortedArr0 = [
    15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14,
    19,
];
function bubbleSort(array) {
    // This makes a value to check if it made a swap or not.
    let swapped = true;
    let arrayLength = array.length;
    // While a swap was made it will go through 
    // all the elements and swap stuff if needed.
    // If a swap hasn't been made, swapped will 
    // equal false and stop going through the while loop 
    // to swap around elements because it is sorted.
    while (swapped == true) {
        // this makes it false so that if a swap was made it will be true instead 
        // of swapped being true all the time and going forever.
        swapped = false;
        let swapperIndex = 0;
        // This goes through the swapping for a maximum of the 
        // length of the array, If the array is 10 elements,
        // then it will take a maximum of 10 sets of swaps because it puts 
        // the greatest unsorted element at the end of the array each time.
        // Ex. If the array was in reverse order and was 5 elements long, 
        // it would take all 5 rounds of swaps to sort the array.
        for (swapperIndex; swapperIndex < arrayLength; swapperIndex += 1) {
            // If the first is greater than the second, it will swap and vice versa won't swap.
            if (array[swapperIndex] > array[swapperIndex + 1]) {
                // This makes a temporary variable so that it can save the 
                // second element and put it in the swapped position.
                let swap = array[swapperIndex];
                // This makes the 2 elements equal the greater number then puts the 
                // lesser number at the first index out of the 2 indexes.
                array[swapperIndex] = array[swapperIndex + 1];
                array[swapperIndex + 1] = swap;
                // Again, it makes it true because a swap was made so that it can swap again later.
                swapped = true;
            }
        }
    }
    console.log(array);
    return array;
}
bubbleSort(notSortedArr0);
// Test Algorithm With (node bubble-sort.js)
// Code Works
