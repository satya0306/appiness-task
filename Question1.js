function findIndexOfArray(array, target) {
    let copyArray = [];
    copyArray.push(array.sort());
    for (let i = 0; i < array.length; i++){
      if(target <= array[i]){
        return i;  
        } 
    }
  }
  console.log(findIndexOfArray([4,3,5,7,9], 5));