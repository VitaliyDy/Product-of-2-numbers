module.exports = function multiply(first, second) {
    const delimeter = 7; //determines the number of digits for dvision of first and second
    let tempResultArray=[],
        firtsArrOfNum = [],
        secondArrOfNum =[],
        arraysCountInDdArr = 0,
        result = '';

    firtsArrOfNum = getArrayOfNumsfromStr(first, delimeter);
    secondArrOfNum = getArrayOfNumsfromStr(second, delimeter);
    ddArrayResultOfMultiply = multiplyArrays(firtsArrOfNum, secondArrOfNum, delimeter);
   
    for (let k = 0, len = ddArrayResultOfMultiply.length; k < len; k++) {             
       tempResultArray.push(sumOfSingleArray(ddArrayResultOfMultiply[k]).join(''));
    }    

    result = sumOfSingleArray(tempResultArray).join('')
  
    return result;  
}


/**
 * returns array of numbers(length of number = delimetr)  
 * @param {*string} numString 
 * @param {*int} delimeter 
 * @returns {int[]}
*/
function getArrayOfNumsfromStr(numString, delimeter) {
    let arr = numString.slice().split(''); 
    let tempArrOfNums = [];
    while(arr.length > delimeter ){
            tempArrOfNums.unshift(parseInt(arr.splice(-delimeter,delimeter).join("")));
    }
    tempArrOfNums.unshift(parseInt(arr.join(""))); 
return tempArrOfNums;
}

/**
 * create double dimension array of multiplyed numbers counted by delimeter.
 * with the number of zeros according to the digit 
 * @param {*int[]} firtsArr 
 * @param {*int[]} secondArr 
 * @param {*int} delimeter 
 * @return {*string[]} 
*/
function multiplyArrays (firtsArr,secondArr, delimeter){    
    let resultDdArr = [],
        firstLen = firtsArr.length-1,
        secondLen = secondArr.length-1;

    for (let i = 0 ; i <= firstLen; i++) {
        resultDdArr[i] = [];
        for (let j = 0 ; j <= secondLen; j++) {
            resultDdArr[i][j] = firtsArr[firstLen-i]*secondArr[secondLen-j] + addZeros((i+j)*delimeter);
        }                        
    }
    return resultDdArr;
}

/**
 * Sum numbers(as strings) off array  digit by digit, add zero at the beginning of arrays.
 * @param {*string[]} array 
 * @return {*string[]} 
 */
function sumOfSingleArray (array) {   
    let subArrLen = 0,
        resultLen = 0,
        subs = 0,
        tempKnum = 0,       
        resultArr = [];
    
    array = array.map(x => x.split(''));

    for (let i = 0; i <  array.length; i++ ){    
        subArrLen = array[i].length;          
        resultArrLen = resultArr.length;
        
        if (subArrLen !== resultArr.length) {
            subs = subArrLen-resultArr.length+1;
            resultArr = addZeros(subs).split('').concat(resultArr);
            array[i] = ['0'].concat(array[i]);
        }
        flagDelimetr = 0;
        for( let j = array[i].length-1 ; 0 <= j; j-- ){                
            tempKnum = parseInt(resultArr[j]) + parseInt(array[i][j]) + flagDelimetr;               
            flagDelimetr = 0;            
            if (tempKnum >= 10){
                flagDelimetr = 1;                    
            }
            resultArr[j] = String(tempKnum % 10);
        }                    
    }   
    //delete extra nuls from beginning of array with resul
    while(resultArr[0] === '0' ) {
        resultArr.shift();
    }   
    return  resultArr; 
}

/**
 * return string of required number of zeros
 * @param {*int} num
 * @return {*string}  
 */
function addZeros (num) {
    let zeros =''
    for (var i = 0; i < num; i++) {
        zeros += '0';            
    }
    return zeros;
}