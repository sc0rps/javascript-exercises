const removeFromArray = function(arr, remove) {
    if (arr.indexOf(remove) == -1) return arr
    arr.splice(arr.indexOf(remove), 1)
    return arr
 
};

removeFromArray([5,3,2], 3)

// Do not edit below this line
module.exports = removeFromArray;
