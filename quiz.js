var arr=[];
var index = 0;
//store user input controls & submit button
var submitBtn = document.getElementById("submit");
var height = document.getElementById("height");
var character = document.getElementById("character");



function growTree(height, character){


	height = parseInt(height);
	var charCount = 1;

	//initial loop that counts height of tree
	for (var i = height; i>0; i--){
		arr[index]="";

		//secondary nested loop that pushes spaces into single array index
		for(var j=i; j>0; j--){
			//setting(j=i) updates amount of spaces added to index of array each loop through 
			arr[index] +=" ";
		}
		//third nested for loop adds characters to tree
		for(var k = 0; k<charCount; k++){
			arr[index] +=character;
		}
		console.log(arr[index]);//displays array in console
		index++;//tells array to start the next index so that the indexes will display on appropriate lines and form a tree shape
		charCount += 2;//adds two characters to array index each loop through(added after spaces)
	}//intial for loop
}//function


//event listener for grow tree button on form
submitBtn.addEventListener("click", function(){
	var h= height.value;
	var c= character.value;

	growTree(h,c);
});








