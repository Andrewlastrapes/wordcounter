
var $wordTotal = $(".wordTotal");
var $submit = $("#submit");
var $input = $("#fieldText");
var $wordCounter = $(".wordCounter");
var counts = {}


$submit.on("click", function(event){
	event.preventDefault()
	var words = $input.val()
	words = words.toLowerCase();
	words = words.split(" ");
		for (var i = 0; i < words.length; i++){
		var word = words[i]
		if (counts[word] === undefined){
			counts[word] = 1;
		} else {
			counts[word] = counts[word] + 1;
		}
	}


	$wordCounter.empty();
	$wordCounter.append(counts);
	$wordTotal.empty();
	$wordTotal.append("Words: " + words.length);

});

