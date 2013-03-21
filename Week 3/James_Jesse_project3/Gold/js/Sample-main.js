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
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]')
					var legend = $('#consoleList').children('legend');
					var fieldName = key=="xbox360" ? legend.text() : label.text();
					html += '<li>'+ fieldName +'</li>'
				};
				$('#addItemErrors ul').html(html);
			},
			submitHandler: function(){
				var data = myForm.serializeArray()
				var newObj = JSON.stringify(data)
				var newId = Math.floor(Math.random() * 1000000001);
				localStorage.setItem(newId, newObj);
				location.reload('#addItem')
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
