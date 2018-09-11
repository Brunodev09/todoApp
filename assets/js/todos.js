

//Toggle logic without using toggleClass() method
/*
$("li").on("click", function() {
	if ($(this).css("color") == "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none",
		});
	} else {
	$(this).css({
		color: "gray",
		textDecoration: "line-through",
		})
	}
});*/

$("ul").on("click", "li", function() { //When a li is clicked inside a ul. You have to add the listener to a element that exists when the page first loads.
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {//When a span is clicked inside a ul. You have to add the listener to a element that exists when the page first loads.
	$(this).parent().fadeOut(500, function() { //this, in this case, refers to the span
		$(this).remove(); //.this, in this case, refers to the li.
	}); //.parent() Will select the parent element, in this case, the li.
	event.stopPropagation(); //It will stop to propagate the listeners. In this case, the li listener. It will only activate the span, which is inside the li.
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which == 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>"); //Takes HTML code as paramater and append it to the element we selected.
	}
});
