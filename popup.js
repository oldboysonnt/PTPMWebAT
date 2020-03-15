chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var url = tabs[0].url;
    let currentURL = document.querySelector(".js-currentURL");
    currentURL.innerText = url;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var copiedText = "";
        chrome.storage.local.get('copiedText', function (result) {
            copiedText = result.copiedText;
            document.querySelector("#js-copiedText").innerText = copiedText;
        });
      });
    
});


