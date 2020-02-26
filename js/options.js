document.addEventListener('DOMContentLoaded', function() {

    $("#optionsSaveStay").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			agency: $("#agency").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			dashboard: $("#dashboard").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          $("#message").slideToggle("slow");

	        }, 3000);

		});

	});

	$("#optionsSaveClose").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			agency: $("#agency").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			dashboard: $("#dashboard").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          window.close();

	        }, 3000);

		});

	});

	$("#optionsSaveTest").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			agency: $("#agency").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			dashboard: $("#dashboard").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          $("#message").slideToggle("slow");
	          window.location.href = "https://www.iamresponding.com";

	        }, 3000);

		});

	});

    $("#default").click(function() {

	    $("#dashboard").val("default");
	    $("#defaultdiv").addClass("selected");
	    $("#incidentdiv").removeClass("selected");

	  });

	$("#incident").click(function() {

	    $("#dashboard").val("incident");
	    $("#defaultdiv").removeClass("selected");
	    $("#incidentdiv").addClass("selected");

	  });


	chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

		$("#agency").val(response.agency);
		$("#username").val(response.username);
		$("#password").val(response.password);
		$("#dashboard").val(response.dashboard);

		if (response.dashboard == "default") $("#defaultdiv").addClass("selected");
		else if (response.dashboard == "incident") $("#incidentdiv").addClass("selected");

    });
	
	$("#agency").focus();

});