function reverseInParentheses(s) {
    //takes an input in parentheses and reverse the characters
    // find the parentheses and reverse characters
    // if there is another parentheses continue process
    // possible recursion 
    
    while(true){
        let c = s.indexOf(')')
        
        if(c < 0){
            break; 
        }
        
        let o = s.substring(0, c).lastIndexOf('('); 
        
        let start = s.substring(0, o); 
        let middle = s.substring(o + 1, c).split('').reverse().join('')
        let end = s.substring(c+1, s.length); 
        
        s = start + middle + end
        
    }
    
    return s 
    
}

reverseInParentheses('foo(bar)')
