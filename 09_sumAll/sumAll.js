const sumAll = function(start, end) {
    if (!(Number.isInteger(start) && Number.isInteger(end)) || start < 0 ||  end < 0) {
        return "ERROR"
    };
    total = 0
    if (end < start) {
        let temp = start
        start = end
        end = temp
    }
    console.log(start)
    console.log(end)
    for (i = start; i < end + 1; i++) {
        total += i
        console.log
    };
    return total
    
}
    

console.log(sumAll(10,5))

// Do not edit below this line
module.exports = sumAll;
