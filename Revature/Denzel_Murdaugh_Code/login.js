var user;
var clear;
$(function(){
	$("#alert").hide();
    $("#noMatch").css({
		"color":" red",
		"display":"none",
    });
	$("#confirmation").css({
		"display":"none",
    });
	$("#submission").click(function(){
	validate();
		setTimeout(function(){
			if(clear == false){
			$("#alert").show();
				console.log(clear,clear);
			document.getElementById("Password").value = "";
			}else{
				$("#alert").hide();
				window.location.href = 'home.html';
			}
		}, 600);
	});
	
})

window.onload=function(){
	document.getElementById("modalLogin").addEventListener("click",regValidate);
}

function regValidate(){
	var pass=document.getElementById("psw").value;
	var check=document.getElementById("pswCheck").value;
		$("#noMatch").css({
			"display":"none",
		});
		$("#Confirmation").css({
			"display":"none",
		});
	if(pass==check){
		document.getElementById("psw").value="";
		document.getElementById("pswCheck").value="";
		document.getElementById("uname").value="";
		$("#confirmation").css({
			"display":"",
		});
	}else{
		$("#noMatch").css({
			"display":"",
		});
		console.log("false check");
		document.getElementById("pswCheck").value="";
	}
		
	
}
function validate(){
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
			user = JSON.parse(xhr.responseText);
			clear= userCheck(user);
			console.log(clear);
		}
	}
	// 7 types of http Request: Main one is GET
	xhr.open("GET", "https://api.myjson.com/bins/wp6wb" ,true); // Setting to true mean AJAX
	xhr.send(); //First you open then you send
}
 
function userCheck(user){
	var uname=document.getElementById("Username").value;
	var pword=document.getElementById("Password").value;
	for(i=0;i<user.Valid.length;i++){
		if(user.Valid[i].user==uname){
			if(pword==user.Valid[i].pw){
				return true;
			}
			else{
				return false;
			}
		}
	}
	return false;
}