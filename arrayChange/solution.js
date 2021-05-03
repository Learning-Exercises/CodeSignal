function arrayChange(inputArray) {
    // each element in the array must be one greater than the last 
    // if not, need to know how many moves it will take to 
    // be one greater than the previous element
    // while loop in a for loop 
    
    let moves = 0 
    
    for(let i = 1; i < inputArray.length; i++){
      if(inputArray[i] <= inputArray[i-1]){
          let diff = inputArray[i-1] - inputArray[i] + 1
          inputArray[i] += diff 
          moves += diff
      }
    }
    
    return moves
    
}
