//For checking and unchecking List
$("ul").on("click","li",function(){
	$(this).toggleClass('completed');
});

//For Deleting Li from DOM
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding New Li(st) to Todo List
$("input[type=text]").keypress(function(event) {
	
	var input=$(this).val();
	if(event.which===13)
	{
		$(this).val("");
		$("ul").append("<li><span>X </span>" + input +"</li>");
	}
});

$("#add").on("click",function(){
	$("input").toggleClass('displayInput');
});