

function sortByHeight(a) {
    
    s = a.filter( t => t > 0).sort((a,b) => a - b)
    
    return a.map(p => {
        if(p !== -1){
            return s.shift()
        } 
        
        return -1
    })
     
 }