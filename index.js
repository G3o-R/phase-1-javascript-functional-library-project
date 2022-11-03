const standardizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    let newArray = standardizeInput(collection)
    for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i])
    }
    return collection
}

function myMap(collection,callback){
    let newArray = standardizeInput(collection)

    const copyOfArray = [] 

    for (let i = 0; i < newArray.length; i++) {
       copyOfArray.push( callback(newArray[i]))
    }
    return copyOfArray 
}