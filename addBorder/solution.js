function addBorder(picture) {
    // add "*" to the beginning and end of each row in an matrix
    // add "*" with the amount being the string length to the 
    // beginning and end of the array
    
    
    let row, column = [], stars = 0, newPicture = []
    
    for(let i = 0; i < picture.length; i++){
        row = "*" + picture[i] + "*"
        
        newPicture.push(row); 
    }
    
    stars = "*".repeat(newPicture[0].length)
    newPicture.push(stars)
    newPicture.unshift(stars)
    
    return newPicture; 
    
}

function addBorder(picture) {
    let width = picture[0].length + 2
    
    return [
        "*".repeat(width), 
        ...picture.map(line => `*${line}*`), 
        "*".repeat(width)
    ]
      
  }