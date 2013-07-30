// exercise 3 - complete
// alert("hi")


// 5 var name = prompt("What's your name?")
// console.log(name);

// 6:
// var movie = prompt("What movie would you like to see?")
// var time = prompt("What time would you like to see that movie?")
// console.log("Will you go see " + movie + " with me at " + time + "?")

// 7:
// var password = prompt("What is your password?")
// 	if (password.length <= 10) {
// 		prompt("Your password needs to be 10 characters or longer, try again");
// 	console.log("Success")
// 	}
// 	else {
// 		console.log("success");
// 	}

// 8:
// var age = prompt("How old are you?");
// if (age >= 21) {
// 	alert("You can drink!");
// }
// else if(age < 21){
// 	var gender = prompt("Are you a male or female?");
// 	if (gender == "female"){
// 		alert("fine, you can drink.");
// 	}

// 	else {
// 		var hometown = prompt("Where are you from?");
// 		if (hometown == "Austin") {
// 			alert("Sure, go ahead");
// 		}
// 		else {
// 			alert("No dice, man.")
// 		}
// 	}
// }
// In ruby, we use gets.chomp after we ask the user a question, which allows us to store the answer in a variable. the conditionals are similar, but the syntax requires more parentheses and squiggly brackets.
// 9:

// grocery_list = ["beans", "fruit", "milk", "cereal"]
// var i;
// for (var i = 0; i < grocery_list.length; i++){
// 	console.log("I need " + grocery_list[i]);
// }
// alert("All done shopping");

// 10:
// taylor_info = {name: "Taylor", age: 26, gender: "male", height: 73, weight: 190, swagger: "Swaggerific"}
// alert(taylor_info["name"] + ", the " + taylor_info['age'] + " year old " + taylor_info["swagger"] + " superstar, is " + taylor_info['height'] + " inches tall," + taylor_info['weight'] + " pounds.");

// 11:

// function createHeader(my_name){
// 	return "<h1>" + my_name + "</h1>";
// }

// function createImage(image_file){
// 	return "<img src=" + image_file + ">";
// }

// function createParagraph(age, gender, job){
// 	return "<p>" + age + ", " + gender + job + "</p>";
// }

// function createProfile(my_name, age, gender, job, image_file){
// 	console.log(createHeader(my_name) + createImage(image_file) + createParagraph(age, gender, job));
// }


// 16:
// $('h1').hide()
// $('div').hide()
// $('.wrapper').hide()
// $('.profilepic').hide()
// $('.nav-items').hide()
// $('#bottom-nav-item').hide()
// $('div:nth-child(3)').hide()
// $("div:has(p)").hide()
// $("p:nth-last-child(2)").hide()
// $('div.nav-item').hide()
// $('div.nav-items').children().hide()

// 17: 
// $('.right-sidebar').hide()

// 18:
// $('.card').hide()

// 19:
// $('.main').show()

// 20:
// $('p').text("holla for a dolla")

// 21:
// $('.main p').append("Shezhan should change his name to sexy chocolate")

// 22:
// $('p').append('<p>Test</p>')

// 23:
// $('.right-sidebar').remove()

// 24:
// var blog = $('.nav-item:first-child')
// blog.remove()
// $('.nav-items').append(blog)

// 25:
// var navbar = $('.nav').clone()
// $('.nav').after(navbar)

// 26:
// $('profilepic').width(300)

// 27:
// $('.right-sidebar').hide(500)
// $('.right-sidebar').show(500)

// 28:
// $('.profilepic').click(function(){
// 	$('.nav-items').slideToggle()
// });

// 		function(){
// 	});
// 	$('.profilepic').click(function(){
// 		$('.nav-items').slideDown();
// 	});
// });

// 32:
// $(document).ready(function(){
// 	$('.profilepic').click(function(){
// 		$('.nav-items').slideToggle()
// 	});
// 	$('div').hide();
// });


// 34: see 32

// 35:
// $('h1').click(function(){
// 		alert("Alert, player");
// 	});

// 36: 
// 	$('h1').click(function(){
// 		$(this).append("!");
// 	});

// 37: 
// $('body').click(function(){
// 			$(this).css("background", "#00BFFF");
// 	});


// 38:
// $('.main').click(function(){
// 	$(this).clone(function(){
// 		$(this).after($('.main');
// 	});
	
// });

39:













