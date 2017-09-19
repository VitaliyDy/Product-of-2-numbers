module.exports = function multiply(first, second) {
    if( isNaN(+first) || isNaN(second)){
        throw new Error('params is not digits');
    }
    const delimeter = 3; //determines the number of digits for dvision of first and second
    let result;
    
    //get first (string)number as array of numbers   
    // let firstNumAsArray = first.slice().split('').map(Number);
    // let tempFirstPartOne;
    // let tempFirstParTwo;
    // if(firstNumAsArray.length >= 8) {
    //     tempFirstPartOne = firstNumAsArray.splice(-16);
    //     tempFirstParTwo.splice(0,-16);
    // }
    let firtsArrOfNum = getArrayOfNumsfromStr(first, delimeter), 
        secondArrOfNum = getArrayOfNumsfromStr(second, delimeter);

    //create double dimension array of numbers as strings divided by delimeters
  //  function multiplyArrays (){
    let ddArrResultOfmultiply = [];

    for (let i = 0, firstArrLen = firtsArrOfNum.length-1; i <= firstArrLen; i++) {
        ddArrResultOfmultiply[i] = [];
        for (let j = 0, secondArrLen = secondArrOfNum.length-1; j <= secondArrLen; j++) {
            ddArrResultOfmultiply[i][j] = [];
            ddArrResultOfmultiply[i][j].push(firtsArrOfNum[firstArrLen-i]*secondArrOfNum[secondArrLen-j]);
            ddArrResultOfmultiply[i][j] += addZeros(i+j,delimeter);
        }
                    
    }
    let arrsInDdarrResuylt = ddArrResultOfmultiply.length;
   //    return 
 //   }

    /**
     * Sum numbers(as strings) in array, digit by digit
     * @param {*string[]} array 
     * @return {*string[]} 
     */
    function sumOfSingleArray (array) {
        const len = array.length;
        let FirstNumLen =0,
            SecNumLen = 0,
            tempArr = [];

        for (let i = 0; i < len; i++){
            tempArr.push([array[i].split('')]);
        }
        for (let j = 0; j< len-1; j++ ){
            FirstNumLen = tempArr[j].length;
            SecNumLen =  tempArr[j+1].length;
        }
        



    }



    /**
     * return string of required number of zeros
     * @param {*int} num 
     * @param {*int} delimeter
     * @return {*string}  
     */
    function addZeros (num,delimeter) {
        let zeros =''
        for (var i = 0; i < num*delimeter; i++) {
            zeros += '0';
            
        }
        return zeros;
    }

    /**
     * returns array of numbers   
     * @param {*string} numString 
     * @param {*int} delimeter 
     * @returns {int[]}
    */
    function getArrayOfNumsfromStr(numString, delimeter) {
        let arr = numString.slice().split('');
        let tempArrOfNums = [];
        while(arr.length > delimeter ){
             tempArrOfNums.unshift(parseInt(arr.splice(-delimeter,delimeter).join(""),10));
        }
        tempArrOfNums.unshift(parseInt(arr.join(""),10));
    return tempArrOfNums;
    }

    return ddArrResultOfmultiply;
   
     
}
