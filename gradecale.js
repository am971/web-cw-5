function submit(){

var text ;
let Q = document.getElementById('Quizes').value;
let M= document.getElementById('Midterm').value;
let FT = document.getElementById('FinalTest').value;
let O = document.getElementById('Oral').value;
let add = Number (Q) + Number (M)+ Number (FT )+Number (O);

    if (add >=90 && add <= 100){
      text = "A";
    }
    else if (add >= 80 && add <= 89)
      {text = "B";}
      
    else if  (add >= 70 && add <= 79)
      {text = "C";}
    else if (add >= 0 && add <= 59)
      {text = "F";}
    else 
    { text = "F";} 
  
  (document.getElementById('total_grades').innerText = add);
  (document.getElementById('final_grade').innerText = text);
}
  
  
   
       
      

    
   