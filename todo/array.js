function arrayMethods() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];

	fruits.pop();

	console.log('The pop() method removes the last element from an array.' + fruits);

	fruits.join(' - ');

	console.log('The join() method joins array elements into a string.' + fruits);

	fruits.toString();

	console.log('The toString() method returns an array as a comma separated string: ' + fruits);
}