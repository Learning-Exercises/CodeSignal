function alternatingSums(a) {
    // iterate through the array and put values in two arrays
    // sum up the two array and return the two sums
    
    let team1Sum = 0
    let team2Sum = 0 
    
    let sums = []
    
    for(let i=0; i < a.length; i++){
        if(i % 2 === 0){
            team1Sum += a[i]
        } else {
            team2Sum += a[i]
        }
    };
    
    sums.push(team1Sum);
    sums.push(team2Sum);
    
    return sums; 
}

function optimizedSum(a){
    return a.reduce((p,v,i) => {
            console.log(a, 'a')
            console.log(p, 'p')
            console.log(i, 'i')
            return p[i&1]+=v,p 
            
    }, [0,0]) 
    
}