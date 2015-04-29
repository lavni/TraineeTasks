$(document).ready(function() {
	$('body').layout({ applyDemoStyles: true });
});

var users=[
{email: 'tom@mail.ru', password: '123'},
{email: 'rick@mail.ru', password: '123'},
{email: 'john@mail.ru', password: '123'}];

function overlay(login){
	var ind = login.indexOf("@")
	var name = login.substring(0, ind);
	$('header #hello').text('HELLO ' + name +'!');
	$('.overlay').addClass('none');

}

function signIn(){
	var vals = sessionStorage();
	// var login = $('#autoris input[type=email]').val();
	// var pass= $('#autoris input[type=password]').val();
	var ok = false;
	for (var i=0; i<users.length; i++){
	 	if (users[i].email === vals[0]) { 
	 		if (users[i].password === vals[1]) {
	 			ok = true;
	 			break;
	 		} 
	 	} 
	}
	if (ok) { 
		overlay(vals[0]);
	} else {
		alert('Invalid login/password');
	}
}

function register(){
	var vals = sessionStorage();
	// var login1 = $('#register input[type=email]:eq(0)').val();
	// var login2 = $('#register input[type=email]:eq(1)').val();
	// var pass1 = $('#register input[type=password]').val();
	var ok = true;
	function validateEmail(email) {
    	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   		return re.test(email);
	}
	if (!vals[2]) {
		alert('Email required');
		ok = false;
		return false;
	}
	if (!(validateEmail(vals[2]))){
		alert("Email isn't valid");
		ok = false;
		return false;
	}
	if (vals[2] !== vals[3]) {
		alert('Emails are not the same');
		ok = false;
		return false;
	}
	if (!vals[4]) {
		alert('Password required');
		ok = false;
		return false;
	}
	for (var i=0; i<users.length; i++) {
		if (users[i].email === vals[2]) { 
 			alert('Email ' + vals[2] + ' already exists');
 			ok = false;
 			break;
	 	} 
	}
	if (ok) {
		var newUser = {email: vals[2], password: vals[4]};
		console.log(newUser);
		users.push(newUser);
		alert('Success! ' + vals[2] + ' registered!');
		$('#register input[type=email]:eq(0)').val('');
		$('#register input[type=email]:eq(1)').val('');
		$('#register input[type=password]').val('');
	}
}
function sessionStorage(){
	if(typeof(Storage) !== "undefined") {
    	console.log('1');
    	function register(){}
    	sessionStorage.login = $('#autoris input[type=email]').val();
    	sessionStorage.pass = $('#autoris input[type=password]').val();
    	sessionStorage.login1 = $('#register input[type=email]:eq(0)').val();
    	sessionStorage.login2 = $('#register input[type=email]:eq(1)').val();
    	sessionStorage.pass1 = $('#register input[type=password]').val();
    	return [
    	sessionStorage.login, 
    	sessionStorage.pass, 
    	sessionStorage.login1, 
    	sessionStorage.login2, 
    	sessionStorage.pass1
    	];
	} else {
    	alert('Sorry! No Web Storage support..');
	}
}