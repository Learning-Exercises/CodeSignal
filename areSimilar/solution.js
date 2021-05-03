function areSimilar(a, b) {
    // two arrays, elements in the array must be equal 
    // Or can be equal by replacing two elements at most
    
  let bd = b.filter((v,i) => v !== a[i]); 
  let ad = a.filter((v,i) => v !== b[i]); 
  
  return ad.length === 0 || bd.join('') === ad.reverse().join('')
}