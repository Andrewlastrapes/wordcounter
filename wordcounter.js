
var $wordTotal = $(".wordTotal")
var $submit = $("#submit")
var $input = $("#fieldText")




	$submit.on("click", function(event){
		event.preventDefault()
		var newText = $input.val()
		newText = newText.toLowerCase();
		newText = newText.split(" ");
		$wordTotal.empty()
		$wordTotal.append("Words: " + newText.length);
	})





