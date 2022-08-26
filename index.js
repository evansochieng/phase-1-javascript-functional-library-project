// Collection Functions (Arrays or Objects)

//myEach()
function myEach(collection, callback){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Loop over every element of the array and pass it as an argument to the callback
    for (let element of myArray){
        callback(element);
    };

    // Return the original, unmodified collection
    return collection;
}

// myMap()
function myMap(collection, callback){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Pass every element of the array to the transformation callback function
    let newArray = [];

    for (let element of myArray){
        newArray.push(callback(element));
    }

    // Return the new array
    return newArray;
}

// myReduce()
function myReduce(collection, callback, acc){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Loop over every element of the array and reduce the elements
    // Account fot a situation where there is no initial value
    let total;

    if (acc){ //if initial value is provided
        total = acc;
        for (let element of myArray){
            total = callback(total, element);
        }
    } else { //if initial value is not given
        total = myArray[0]; //assign the initial value to the first item
        for (let element of myArray.slice(1)){
            total = callback(total, element, myArray)
        }
    }

    // Return the final value
    return total;
}

// myFind()
function myFind(collection, predicate){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Return boolean on first match or undefined if there is no match
    let firstMatch;

    for (let element of myArray){//loop over elements
        if (predicate(element)){ //check if true
            firstMatch = element; //assign element to the first match
            return firstMatch; //return the first match
        } else {
            firstMatch = undefined; //if false assign first match to undefined
        }
    }
    return firstMatch; //return undefined(value of firstMatch) if there is no match
}

// myFilter()
function myFilter(collection, predicate){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Return all elements that match (return true from callback function)
    let matchingElements = [];

    for (let element of myArray){//loop over elements
        if (predicate(element)){ //check if true
            matchingElements.push(element); //add element to the list of matches match
        }
    }
    //return an array of matching elements
    return matchingElements; 
}

// mySize()
function mySize(collection){
    // Check if collection is an array or an object
    // I want to create a function that processes arrays
    let myArray;
    if (Array.isArray(collection)){
        myArray = collection;
    } else {
        myArray = Object.values(collection);
    };

    // Count all the elements in the array
    let count = 0;

    for (let element of myArray){
        count += 1 //count elements
    }

    return count;
}


// Array Functions

// myFirst()
function myFirst(array, n=1){
    if (n === 1){
        return array[0] //return first element if n=1
    } else { //otherwise
        let newArray = [];
        for (let element of array){
            if (newArray.length < n){ //while length of array is less than n
                newArray.push(element); // add elements to the array
            }
        }
        return newArray; // return an array with the required number of elements
    }
}

// myLast()
function myLast(array, n=1){
    if (n === 1){
        return array[array.length - 1] // return last element if n=1
    } else {//otherwise
        let newArray = [];

        for (let count = 1; count <= n; count += 1){//while count is not greater than n
            newArray.unshift(array[array.length - count]); //add the elements at the beginning of new array
        }
        return newArray; //return the new array
    }
}

//Object Functions

//myKeys()
function myKeys(object){
    let newArray = [];

    // Add the keys of the object to the array
    for (let key in object){
        newArray.push(key);
    }

    // return the array
    return newArray;
}

// myValues()
function myValues(object){
    let newArray = [];

    // Add the values of the object to the array
    for (let key in object){
        newArray.push(object[key]);
    }

    // return the array
    return newArray;
}

// BONUS ARRAY FUNCTIONS

// mySortBy()
function mySortBy(array, callback){

}

// myFlatten()
myFlatten(array, [shallow], newArr=[]){
    
}