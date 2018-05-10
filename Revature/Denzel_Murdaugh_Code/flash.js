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
	document.getElementById("next").addEventListener("click",getPokemonInfo);
	document.getElementById("previous").addEventListener("click",prevPokemonInfo);
	document.getElementById("restart").addEventListener("click",restartFlash);
	document.getElementById("check").addEventListener("click",checkAnswer);
}

var pokemon;
var array=[];
var index=0;
var pokemonID;
var items=[];
var size=151;
for(i=0;i<size;i++){
	items[i]=i+1;
}
var delElement;


function getPokemonInfo(){
	if(index==array.length){
	pokemonID= items[Math.floor(Math.random()*items.length)];
	array[index]=pokemonID;
	delElement = items.indexOf(pokemonID);
	if (delElement > -1) {
		items.splice(delElement, 1);
	}
	index++;
	}
	else{
		pokemonID=array[index];
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
			presentPokemonInfo(pokemon);
		}
	}
	// 7 types of http Request: Main one is GET
	xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/"+ pokemonID ,true); // Setting to true mean AJAX
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

function prevPokemonInfo(){
	index--;
	var current=index-1;
	pokemonID= array[current];
	console.log(current,pokemonID);
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
			presentPokemonInfo(pokemon);
		}
	}
	// 7 types of http Request: Main one is GET
	xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/"+ pokemonID ,true); // Setting to true mean AJAX
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
	
	getPokemonInfo();
}

function presentPokemonInfo(pokemon){
	
	document.getElementById('pokemonName').innerHTML=pokemon.name;
	document.getElementById('poke_front').setAttribute('src',pokemon.sprites.front_default);
	document.getElementById('poke_back').setAttribute('src',pokemon.sprites.front_default);
}

function checkAnswer(){
	if(document.getElementById('guess').value == pokemon.name){
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