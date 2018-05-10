/*

Pokemon AJAX

*/

window.onload= function(){
	document.getElementById("pokeID").addEventListener("keypress",function(e){
		var key = e.which || e.keyCode;
		
		if (key == 13) { // 13 is enter
			getPokemonInfo();
			console.log (key);
		}
	});
	document.getElementById("pokeBtn").addEventListener("click",getPokemonInfo);
   
}

var pokemon;
function getPokemonInfo(){
	var pokemonID= document.getElementById("pokeID").value;
	
	
	// AJAX Below
	//xhr = XML http Request
	var xhr= new XMLHttpRequest //xhr to communicate with the server
								//Hardly ever used with XML, used more with JSON
	xhr.onreadystatechange = function(){
		console.log("the ready state has changed " + xhr.readyState);
		
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
	
}


function presentPokemonInfo(pokemon){
	
	document.getElementById('pokemonName').innerHTML=pokemon.name;
	document.getElementById('pokeNormal').setAttribute('src',pokemon.sprites.front_default);
	document.getElementById('pokePic').setAttribute('src',pokemon.sprites.front_shiny);
}