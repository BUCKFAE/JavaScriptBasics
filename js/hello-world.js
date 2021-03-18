// Declaring functions
function helloWorld() {
    console.log("Hello, World!")
}

let helloWorld2 = function() {
    console.log("Hello, World!")
}

// Objects
function objectDemo() {

    // Keys have to be strings, but values don't
    let exampleObject = {"key1": "value1", "key2": "value2"} 

    // Printing objects
    console.log(exampleObject)

    // Accessing values of objects
    let value1 = exampleObject.key1
    console.log("Value 1 of the exampleObject:" + value1)

    // Setting values of objects
    exampleObject.key2 = "newValue2"
    console.log(exampleObject)
}

// Arrays
function arrayDemo() {

    // Arrays are ordered lists of elements
    let myArray = ['one', 2, 'three', {"key": "four"}]
    console.log(myArray)

    // Adding elements
    myArray.push(5)
    console.log(myArray)

    // Removing the last element
    myArray.pop()
    console.log(myArray)

    // Get element at index
    let value1 = myArray[2]
    console.log(value1)
}