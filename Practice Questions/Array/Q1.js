https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/


function peakElement(Array){
    for(let i = 0; i < Array.length; i++){
      if(Array[0] > Array[1]){
        return Array[0]
      }else if(Array[Array.length -1] > Array[Array.length -2]){
        return Array[Array.length -1]
      }
      else{
        if(Array[i] > Array[i-1] && (Array[i] > Array[i + 1])){
          return Array[i]
        }
      }
    }
  }
  
  
  
  console.log(peakElement([4, 9, 15, 17, 23, 90, 677]))