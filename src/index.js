module.exports = function multiply(first, second) {
    const delimeter = 7; //determines the number of digits for dvision of first and second
    let tempResultArray=[],
        firtsArrOfNum = [],
        secondArrOfNum =[],
        arraysCountInDdArr = 0,
        result = '';

    firtsArrOfNum = getArrayOfNumsfromStr(first, delimeter), 
    secondArrOfNum = getArrayOfNumsfromStr(second, delimeter);
    ddArrayResultOfMultiply = multiplyArrays(firtsArrOfNum,secondArrOfNum);
    DdArrLen = ddArrayResultOfMultiply.length;   
   
    for (let k = 0; k < DdArrLen; k++) {             
       tempResultArray.push(sumOfSingleArray(ddArrayResultOfMultiply[k]).join(''));
    }    

    result = sumOfSingleArray(tempResultArray).join('')
  
    return result;  

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

    /**
     *  create double dimension array of numbers counted by delimeter
     * @param {*int[]} firtsArr 
     * @param {*int[]} secondArr 
     * @return {*string[]} 
    */
    function multiplyArrays (firtsArr,secondArr){
        
        let resultDdArr = [],
            firstArrLen = firtsArr.length-1,
            secondArrLen = secondArr.length-1;

        for (let i = 0 ; i <= firstArrLen; i++) {
            resultDdArr[i] = [];
            for (let j = 0 ; j <= secondArrLen; j++) {
                resultDdArr[i][j] = [];
                resultDdArr[i][j].push(firtsArr[firstArrLen-i]*secondArr[secondArrLen-j]);
                resultDdArr[i][j] += addZeros((i+j)*delimeter);
            }                        
        }
        return resultDdArr;
    }

    /**
     * Sum numbers(as strings) off array with initArray 
     * digit by digit, add zero at the beginning of arrays.
     * @param {*string[]} array 
     * @param {*string[]} initArray 
     * @return {*string[]} 
     */
    function sumOfSingleArray (array, initArray = []) {      
        const len = array.length;
        let firstNumLen = 0,
            secNumLen = 0,
            subs = 0,            
            tempArr = [],
            firstNum = [],
            secondNum = initArray;

         if(!array.length){
             return initArray;
         }

        for (let i = 0; i < len; i++){
            tempArr.push(array[i].split(''));           
        }
        for (let j = 0; j <  len/*len-1*/; j++ ){
            firstNum = tempArr[j].slice();      
            firstNumLen = tempArr[j].length;          
            secondNumLen = secondNum.length;
            
            if (firstNumLen !== secondNumLen) {
                if (firstNumLen > secondNumLen) {
                    subs = firstNumLen-secondNumLen+1;
                    secondNum = addZeros(subs).split('').concat(secondNum);
                    firstNum = ['0'].concat(firstNum);
                } else {
                    subs = secondNumLen - firstNumLen;
                    firstNum = addZeros(subs).split('').concat(firstNum);
                    secondNum = ['0'].concat(secondNum);
                }
            }

            let flagDelimetr=0;
            let tempKnum = 0;
            for( let k = firstNum.length-1 ; 0 <= k; k-- ){                
                tempKnum = parseInt(secondNum[k], 10) + parseInt(firstNum[k], 10) + flagDelimetr;               
                flagDelimetr = 0;            
                if (  tempKnum >= 10 ){
                    flagDelimetr = 1;                    
                }
                secondNum[k] = String(tempKnum % 10);
            }                    
        }   
        while(secondNum[0] === '0' ) {
            secondNum.shift();
        }   
        return  secondNum; 
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
}
