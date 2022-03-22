var Database = [
	{
		userName: "Yarin",
		passWord: "1234"
	},
	{
		userName: "Ravid",
		passWord: "123"
	},
	{
		userName:"May",
		passWord:"444"
 
	}

];

var Fid = [
	{
	user: "Ravid",
	post : "i'm so tiredddd"
	}
]; 

function ifUserValid(user , password){
	for (var i = 0; i < Database.length; i++) {
		if (Database[i].userName === user &&
			Database[i].passWord === password) {
			return true;
		}
	}
	return false;
}

function signIn(user, password) {
	if (ifUserValid(user, password)) {
		console.log(Fid);
	} 
	else {
		alert("This is wrong password and username");
	}
}



var usernameprompt = prompt("What is your user name?");
var passwordprompt = prompt("What is your password?");


signIn(usernameprompt , passwordprompt);