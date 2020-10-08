
function counter() {
    // code here
    var next1=0;
       return function(){
        next1 = next1+1;
        console.log(next1);
    }     
  }
  
  const next = counter();
   
  next(); // 1
  next(); // 2
  next(); // 3