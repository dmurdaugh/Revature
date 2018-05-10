/*
	Dynamic Form JavaScript
*/

console.log("loaded correctly");

window.onload = function(){
	
	document.getElementById('addStudBtn').addEventListener("click", addStudentFn);
	
}


function addStudentFn(){
	
	//Get the Variables entered by the student/user
	var studName= document.getElementById('studName').value;
	var studAge= document.getElementById('studAge').value;
	var studMajor= document.getElementById('studMajor').value;
	
	
	//create the input tags/elements
	var inputStudName=document.createElement('input');
	var inputStudAge=document.createElement('input');
	var inputStudMajor=document.createElement('input');
	
	//Set the attributes of the created input elements
	inputStudName.value = studName;
	inputStudAge.value = studAge;
	inputStudMajor.value = studMajor;
	
	var submitBtn=document.getElementById('submitBtn');
	//Append the input to the form.
	document.getElementById('studForm').insertBefore(inputStudName, submitBtn);
	document.getElementById('studForm').insertBefore(inputStudAge, submitBtn);
	document.getElementById('studForm').insertBefore(inputStudMajor, submitBtn);
	
	//Reset Fields
	resetFields;
	
	//add a break
	var br= document.createElement('br');
	document.getElementById('studForm').insertBefore(br,submitBtn);
	
}

function resetFields(){
	document.getElementById('studName').value="";
	document.getElementById('studAge').value="";
	document.getElementById('studMajor').value="";
	
}