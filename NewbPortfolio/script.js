$(document).ready(function(){
	$('.profilepic').click(function(){
		$('.nav-items').slideToggle()
	});

	$('.nav-item').hover(function(){
		$(this).css("background", "#00BFFF");
	},function(){
		$(this).css("background", "");
	});

	$('.nav-item').hover(function(){
		$(this).css("width", "auto");
	},function(){
		$(this).css("width", "");
	});

	$('h1').click(function(){
		$(this).append("!");
	});
	$('body').click(function(){
				$(this).css("background", "#00BFFF");
	});
	
	// function validateForm(){
	// 	var x=$('#form input[name=email]').value;

	// 	var y=$('#form input[name=password]').value;

	// 	if (x==null || x==""){
	// 		alert("You're missing an email address");
	// 		return false;
	// 	}	
	// 	if (y==null || y==""){
	// 		alert("You're missing a password");
	// 		return false;
	// 	}
	// 	var atpos=x.indexOf("@");
	// 	var dotpos=x.lastIndexOf(".");
	// 	if (atpos<1 || dotpos<atpos+2 || dotpos+2>x.length){
	// 		alert("Not a valid email");
	// 		return false;
	// 	}
	// 	if (x.length < 8){
	// 		alert("Enter an email greater than 8 characters");
	// 		return false;
	// 	}
	// 	if (y.length < 8){
	// 		alert("enter a password greater than 8 characters");
	// 		return false;
	// 	}	
	// }
	// $('form').submit(validateForm);

});

	