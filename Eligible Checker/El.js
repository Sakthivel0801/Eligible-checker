function eligible(){
    let a = document.getElementsByName("choose");
    let str;
    for(let choice of a){
      if(choice.checked){
        str = choice.value;
        break;
      }
    }
     let str1 = document.getElementById("output");
    switch(str){
        case "Iliterate":
          str1.innerHTML =str + " Not Eligible"
          break;

        case "High School":
            str1.innerHTML =str + " Eligible"
            break;
          
          case "UG" :
            str1.innerHTML =str +" Eligible"
            break;
          
          case "PG":
            str1.innerHTML =str +" Not Eligible"
            break;
          
          case "Doctorate":
            str1.innerHTML =str + " Not Eligible"
            break;
          default:
          
    }  
}