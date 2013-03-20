$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#addItem').on('pageinit', function(){
		var parseData = function(data){
			console.log(data)
		};	
		var myForm = $('#gameReviewForm');
		var errorLink = $('#addItemErrorsLink');
		myForm.validate({
			invalidHandler: function(form, validator){
				errorLink.click();
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]')
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					console.log(fieldName);
					console.log(label)
					console.log(legend)
				}
			},
			submitHandler: function(){
				console.log("yes")
				var data = myForm.serializeArray()
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
