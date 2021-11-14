var storage = chrome.storage.sync;

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            'url': 'chrome://extensions/?options=' + chrome.runtime.id
        });
    } else if (details.reason == "update") {
        //chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.function == "getDefaults") {
            storage.get({
                cadurl: '',
                username: '',
                password: ''
            }, function(items) {
                sendResponse({
                    cadurl: items['cadurl'],
                    username: items['username'],
                    password: items['password']
                });
            });
            return true;
        } else if (request.function == "setOptions") {
            storage.set({
                'cadurl': request.cadurl,
                'username': request.username,
                'password': request.password
            }, function() {
                sendResponse({
                    result: "complete"
                });
            });
            return true;
        }
    });