/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;


var y = Math.round(hello / years);
var d=new Date();
var hello = d.getTime();
var list=["Arthur says good morning","Arthur says good afternoon","Arthur says good evening","Arthur says good night"];
if (d > 8 && d < 12){
    document.write(list[0]);
}
else if (d >= 12 && d < 18){
    document.write(list[1]);
}
else if (d >= 18 && d < 22){
    document.write(list[2]);
}
else{
    if (isNaN(y)=== false){
        document.write("Time 4 fun");
        }
    else{
        document.write(d);
    }
    
}



