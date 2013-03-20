$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
var parseData = function(data){
	console.log(data)
};	
$('#addItem').on('pageinit', function(){
		var parseData = function(data){
			console.log(data)
		};	
		var myForm = $('#gameReviewForm');
		    myForm.validate({
				invalidHandler: function(myForm, validator){
					console.log("no")
				},
				submitHandler: function(){
					console.log("yes")
					var data = myForm.serialize()
					parseData(data);
				}
			});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
