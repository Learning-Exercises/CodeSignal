function palindromeRearranging(inputString) {
    
    let array = inputString.split(''); 
    
    let wordFreq = {}; 
    let count = 0; 
    
    for(let i =0; i < array.length; i++){
        let char = array[i]; 
        
        wordFreq[char] ? wordFreq[char]++ : wordFreq[char] = 1
    }
    
    for(let key in wordFreq){
        if(wordFreq[key] % 2 !== 0){
            count++
        }; 
    }
    
    return count <= 1; 
    
}


