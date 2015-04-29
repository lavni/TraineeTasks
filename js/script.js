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
	var login = $('#autoris input[type=email]').val();
	var pass= $('#autoris input[type=password]').val();
	var ok = false;
	for (var i=0; i<users.length; i++){
	 	if (users[i].email === login) { 
	 		if (users[i].password === pass) {
	 			ok = true;
	 			break;
	 		} 
	 	} 
	}
	if (ok) { 
		overlay(login);
	} else {
		alert('Invalid login/password');
	}
}

function register(){
	var login1 = $('#register input[type=email]:eq(0)').val();
	var login2 = $('#register input[type=email]:eq(1)').val();
	var pass = $('#register input[type=password]').val();
	var ok = true;
	function validateEmail(email) {
    	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   		return re.test(email);
	}
	if (!login1) {
		alert('Email required');
		ok = false;
		return false;
	}
	if (!(validateEmail(login1))){
		alert("Email isn't valid");
		ok = false;
		return false;
	}
	if (login1 !== login2) {
		alert('Emails are not the same');
		ok = false;
		return false;
	}
	if (!pass) {
		alert('Password required');
		ok = false;
		return false;
	}
	for (var i=0; i<users.length; i++) {
		if (users[i].email === login1) { 
 			alert('Email ' + login1 + ' already exists');
 			ok = false;
 			break;
	 	} 
	}
	if (ok) {
		var newUser = {email: login1, password: pass};
		console.log(newUser);
		users.push(newUser);
		alert('Success! ' + login1 + ' registered!');
		$('#register input[type=email]:eq(0)').val('');
		$('#register input[type=email]:eq(1)').val('');
		$('#register input[type=password]').val('');
	}
}
