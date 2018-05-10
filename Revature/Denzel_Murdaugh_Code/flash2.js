/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(function(){
 $("#question").hide();
 $("#Correct").hide();
 $("#Incorrect").hide();
         $("#answer").click(function(){
             $("#f1_card").css({
                 "transform":" rotateY(180deg)",
                 "-webkit-box-shadow":" -5px 5px 5px #aaa",
                 "-moz-box-shadow":" -5px 5px 5px #aaa",
                 "box-shadow":" -5px 5px 5px #aaa"
             });
             $("#answer").hide();
             $("#question").show();
         });
         $("#question").click(function(){
             $("#answer").show();
             $("#question").hide();
             $("#f1_card").css({
                 "transform":"RotateY(360deg) ",
                 "box-shadow":" "
             });
         });
		 
		$(".face").click(function(){
             $("#f1_card").css({
                 "transform":" rotateY(180deg)",
                 "-webkit-box-shadow":" -5px 5px 5px #aaa",
                 "-moz-box-shadow":" -5px 5px 5px #aaa",
                 "box-shadow":" -5px 5px 5px #aaa"
             });
             $("#answer").hide();
             $("#question").show();
         });
         $(".back").click(function(){
             $("#answer").show();
             $("#question").hide();
             $("#f1_card").css({
                 "transform":"RotateY(360deg) ",
                 "box-shadow":" "
             });
         });

});
window.onload=function(){
	document.getElementById("next").addEventListener("click",getCardInfo);
	document.getElementById("previous").addEventListener("click",prevCardInfo);
	document.getElementById("restart").addEventListener("click",restartFlash);
	document.getElementById("check").addEventListener("click",checkAnswer);
}

var pokemon;
var array=[];
var index=0;
var cardID;
var items=[];
var size=10;
for(i=0;i<size;i++){
	items[i]=i+1;
}
var delElement;


function getCardInfo(){
	if(index==array.length){
	cardID= items[Math.floor(Math.random()*items.length)];
	array[index]=cardID;
	delElement = items.indexOf(cardID);
	if (delElement > -1) {
		items.splice(delElement, 1);
	}
	index++;
	}
	else{
		cardID=array[index];
		index++;
	}
	
	console.log(index,array);
	// AJAX Below
	//xhr = XML http Request
	var xhr= new XMLHttpRequest //xhr to communicate with the server
								//Hardly ever used with XML, used more with JSON
	xhr.onreadystatechange = function(){
		//console.log("the ready state has changed " + xhr.readyState);
		
		/*
			readyState 1 = Request is sent
			readyState 2 = Request has been received by Server
			readyState 3 = Server Processing Request
			readyState 4 = Response received and ready to handle
		*/
		if(xhr.readyState == 4 && xhr.status == 200){
			pokemon = JSON.parse(xhr.responseText);
			presentCardInfo(pokemon);
		}
	}
	// 7 types of http Request: Main one is GET
	xhr.open("GET", "https://api.myjson.com/bins/1cseqz",true); // Setting to true mean AJAX
	xhr.send(); //First you open then you send
	  
	$("#answer").show();
		 $("#question").hide();
		 $("#f1_card").css({
			 "transform":"RotateY(360deg) ",
			 "box-shadow":" "
		 });
	 $("#Correct").hide();
	 $("#Incorrect").hide();
	 	
	 	
	document.getElementById('guess').value="";
	
	if(index==size){
		$("#next").css({
			 "opacity":" .5",
			 "cursor":" not allowed"
		});
		document.getElementById("next").disabled = true;
	}else{
		$("#next").css({
			 "opacity":"1",
			 "cursor":" "
		});
		document.getElementById("next").disabled = false;
		
	}

	
}

function prevCardInfo(){
	index--;
	var current=index-1;
	cardID= array[current];
	console.log(current,cardID);
	// AJAX Below
	//xhr = XML http Request
	var xhr= new XMLHttpRequest //xhr to communicate with the server
								//Hardly ever used with XML, used more with JSON
	xhr.onreadystatechange = function(){
		// console.log("the ready state has changed " + xhr.readyState);
		
		/*
			readyState 1 = Request is sent
			readyState 2 = Request has been received by Server
			readyState 3 = Server Processing Request
			readyState 4 = Response received and ready to handle
		*/
		if(xhr.readyState == 4 && xhr.status == 200){
			pokemon = JSON.parse(xhr.responseText);
			presentCardInfo(pokemon);
		}
	}
	// 7 types of http Request: Main one is GET
	xhr.open("GET", "https://api.myjson.com/bins/1cseqz" ,true); // Setting to true mean AJAX
	xhr.send(); //First you open then you send
	
	$("#answer").show();
	 $("#question").hide();
	 $("#f1_card").css({
		 "transform":"RotateY(360deg) ",
		 "box-shadow":" "
	 });
	 $("#Correct").hide();
	 $("#Incorrect").hide();
	 document.getElementById('guess').value="";
	$("#next").css({
		 "opacity":"1",
		 "cursor":" "
	});
		document.getElementById("next").disabled = false;
}

function restartFlash(){
	index=0;
	
	getCardInfo();
}

function presentCardInfo(pokemon){
	
	document.getElementById('cardFront').innerHTML=pokemon.Valid[cardID].question;
	document.getElementById('cardBack').innerHTML=pokemon.Valid[cardID].answer;
}

function checkAnswer(){
	if(document.getElementById('guess').value == pokemon.Valid[cardID].answer){
		console.log("correct");
             $("#f1_card").css({
                 "transform":" rotateY(180deg)",
                 "-webkit-box-shadow":" -5px 5px 5px #aaa",
                 "-moz-box-shadow":" -5px 5px 5px #aaa",
                 "box-shadow":" -5px 5px 5px #aaa"
             });
             $("#answer").hide();
             $("#question").show();
			 $("#Correct").show();
			 $("#Incorrect").hide();
	}
	else{
		$("#Correct").hide();
		console.log("Incorrect");
		$("#Incorrect").show();
	}
}