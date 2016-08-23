var arr=[];
var index = 0;
//store user input controls & submit button
var submitBtn = document.getElementById("submit");
var height = document.getElementById("height");
var character = document.getElementById("character");



function growTree(obj){
//modified the function to take an object as the argument
	obj.height = document.getElementById("height").value;
	obj.character = document.getElementById("character").value;
	var height = parseInt(obj.height);
	var character = obj.character;
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
			arr[index] += character;
		}
		console.log(arr[index]);//displays array in console
		index++;//tells array to start the next index so that the indexes will display on appropriate lines and form a tree shape
		charCount += 2;//adds two characters to array index each loop through(added after spaces)
	}//intial for loop
}//function


//event listener for grow tree button on form
submitBtn.addEventListener("click", function(){
	//eliminated on character variables
	if (height.value !== "" && character.value !== ""){
		var high= height.value;
		var symbol= character.value;
		var specifications={high,symbol};
		growTree(specifications);
	}else{
		alert("Height and Character must each have a value!");
	}
});
character.addEventListener("keydown",function(e) {
	if(e.keyCode === 13){//check whether key pressed is enter
		 high = height.value;
		 symbol = character.value;
		 var specis={high,symbol};
		growTree(specis);
	}
});











