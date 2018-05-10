/*

Challenge js

*/

console.log("loaded");

window.onload= function(){
	document.getElementById("N").addEventListener("keypress",function(e){
		var key = e.which || e.keyCode;
		
		if (key == 13) { // 13 is enter
			fizzBuzz();
			//console.log (key);
		}
	});
	document.getElementById("O").addEventListener("keypress",function(e){
		var key = e.which || e.keyCode;
		
		if (key == 13) { // 13 is enter
			fizzBuzz();
			//console.log (key);
		}
	});
}

function fizzBuzz(){
	var x= document.getElementById("N").value;
	document.getElementById("list").innerHTML="";
	var y= document.getElementById("O").value;
	var i=0;
	
	if(x > y){
		i=y;
		j=x;
	}else{
		i=x;
		j=y;
	}
	for(i;i<=j;i++){
		var h3=document.createElement("h3");
		if(i % 3 == 0 && i % 5 == 0 && i != 0 ){
			h3.innerHTML="fizzbuzz"
		} else if(i % 3 == 0 && i != 0){
			h3.innerHTML="fizz"
		} else if(i % 5 == 0 && i != 0){
			h3.innerHTML="buzz"
		} else{
			h3.innerHTML=i;
		}
		document.getElementById("list").appendChild(h3);
	}
	
}