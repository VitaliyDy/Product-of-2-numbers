module.exports = function multiply(first, second) {
    //get first (string)number as array of numbers

    // let firstNumAsArray = first.slice().split('').map(Number);
    // let tempFirstPartOne;
    // let tempFirstParTwo;
    // if(firstNumAsArray.length >= 8) {
    //     tempFirstPartOne = firstNumAsArray.splice(-16);
    //     tempFirstParTwo.splice(0,-16);
    // }
    
    function getArrayOfNumsfromStr(string) {
        let arr = string.slice().split('');
        let tempArrOfNums = [];
        while(arr.length > 6 ){
             tempArrOfNums.unshift(parseInt(arr.splice(-6,6).join(""),10));
        }
        tempArrOfNums.unshift(parseInt(arr.join(""),10));
    return tempArrOfNums;
    }

    return tempFirtsNum;
   
     
}
