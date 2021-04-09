chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

	var agency = response.agency;
	var username = response.username;
	var password = response.password;

	if (window.location.href.toLowerCase().match("/v3/pages/memberlogin.aspx")) {
		
		var agencyBox = document.querySelector('#ddlsubsciribers');
		var userBox = document.querySelector('#memberfname');
		var passBox = document.querySelector('#memberpwd');

		agencyBox.value = agency;
		userBox.value = username;
		passBox.value = password;

		document.querySelector("#login").click();

	}
	else if(window.location.href.toLowerCase().match('https://www.iamresponding.com/'))
	{
		if (document.getElementsByClassName("CookieConsent").length >= 1)
		{
			console.log(document.getElementsByClassName("CookieConsent"));
			document.getElementsByClassName("CookieConsent")[0].getElementsByTagName('div')[1].getElementsByTagName('button')[0].click();
		}

		window.location.href = 'https://www.iamresponding.com/v3/Pages/memberlogin.aspx';
	}
});