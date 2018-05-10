// JavaScript For Dynamic Table

//DOM= Document Object Model

// var studentName=document.getElementById('studentName').value;
// var studentAge=document.getElementById('studentAge').value;
// var studentMajor=document.getElementById('studentMajor').value;


//Wait fo the dom to finish loading before adding event listers
window.onload= function(){
	
	// Event Listener
	document.getElementById('studentBtn').addEventListener("click",onClick)
}


function onClick(){
	var studentName=document.getElementById('studentName').value;
	var studentAge=document.getElementById('studentAge').value;
	var studentMajor=document.getElementById('studentMajor').value;
	
	// create a table row
	var row= document.createElement('tr');
	
	//Create the name, age and major cells (td)
	
	var cellName=document.createElement('td')
	var cellAge= document.createElement('td')
	var cellMajor=document.createElement('td')
	
	//Insert the Value into the Cells
	cellName.innerHTML = studentName;
	cellAge.innerHTML= studentAge;
	cellMajor.innerHTML= studentMajor;

	//Append Cells to the Row
	row.appendChild(cellName);
	row.appendChild(cellAge);
	row.appendChild(cellMajor);
	
	
	//append the row to the table
	document.getElementById('studTable').appendChild(row);
	
	//clear the fields
	document.getElementById('studentName').value="";
	document.getElementById('studentAge').value="";
	document.getElementById('studentMajor').value="";
}