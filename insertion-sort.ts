let notSortedArr1 = [
	15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14,
	19,
];

function insertionSort(array) {
	let arrayLength = array.length;
	// I tried to do this by making a new array but it was a mess of code and it didn't work
	// so I admit I searched how to insert elements in a new spot in the same array and I understand it now.

	// This goes through each element in the array until the index reaches the array's length which means 
	// its gone through every element and inserted it.
	for (let index = 1; index < arrayLength; index += 1) {
		// This takes the next element in the array
		// The index is 1 to begin so it separates the first element 
		// into the sorted section and looks at index 1 (the second element) 
		// to begin the process.
		let element = array[index];
		// This is the sorted element at the end of the sorted section of the array (index - 1) 
		// that is ignoring the current element we want to sort (index)
		// it is ignoring the current element with the -1.
		let lastSorted = index - 1;
		// While the greatest number in the sorted array (lastSorted) 
		// is greater than the sorted element before it (-1) and is also
		// greater than the current element from the unsorted array (element),
		// then it will go through this while loop.
		while (lastSorted > -1 && element < array[lastSorted]) {
			// This changes the spot where the current element is and changes it to the last element
			// in the sorted array. It basically shifted the element over into the unsorted section but the for loop
			// will ignore it because it will look at the index after where the current element was.
			// It's okay because we still have the current element in our variable
			// to put in the sorted array later.
			array[lastSorted + 1] = array[lastSorted];
			// The element before the last sorted element is now the last sorted element so that 
			// the current element can be placed after it if it is larger. If the current element is
			// smaller than the new lastSorted, then it will go through the while loop again until the current element is 
			// greater than lastSorted. It is kinda hard to explain without a diagram or something but I know how it works now.
			lastSorted -= 1;
		}
		// This finally places the current element inside the sorted array and the for loop goes 
		// to the next index after where the current element was.
		array[lastSorted + 1] = element;
	}
    console.log(array);
	return array;
}

insertionSort(notSortedArr1);

// Test Algorithm With (node insertion-sort.ts)
// Code Works
