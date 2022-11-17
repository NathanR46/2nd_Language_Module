let notSortedArr: any = [
	15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14,
	19,
];

function selectionSort(array) {
	// New array to sort elements into.
	var newArray: any = [];
	// While the original array's length is more than 0, 
	// it will take the smallest element from the old array
	// and put it at the end of the new one until the old array is out of elements.
	while (array.length > 0) {
		// Variable that finds the smallest element of the old array.
		let smallestElement: number = Math.min(...array);
		// Finds its index.
		let indexOfSE: number = array.indexOf(smallestElement);
		// This takes that specific element out of the original array.
		array.splice(indexOfSE, 1);
		// This puts it into the new array at the very end so that it is above the first smallest.
		let addElementToArray: number = newArray.push(smallestElement);
	}
    console.log(newArray);
	return newArray;
}

selectionSort(notSortedArr);

// Test Algorithm With (node selection-sort.js)
// Code Works
