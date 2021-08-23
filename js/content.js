chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

	var cadurl = response.cadurl;
	var username = response.username;
	var password = response.password;

	var locationRegex = /(http|https):\/\/cadview\.[a-z0-9\.\/]+\/[Ll]ogin\.aspx/;

	if (window.location.href.toLowerCase().match(locationRegex)) {
		
		var userBox = document.querySelector('#ctl00_content_Login1_UserName');
		var passBox = document.querySelector('#ctl00_content_Login1_Password');

		userBox.value = username;
		passBox.value = password;

		document.querySelector("#ctl00_content_Login1_LoginButton").click();

	}
});
