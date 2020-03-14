chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var url = tabs[0].url;
    let currentURL = document.querySelector(".js-currentURL");
    currentURL.innerText = url;
    // setInterval(function(){
    //     chrome.tabs.query({
    //         active: true,
    //         currentWindow: true
    //     }, tabs => {
    //         chrome.tabs.sendMessage(
    //             tabs[0].id,
    //             { from: 'popup2' },
    //             function (data) {
    //                 document.querySelector(".js-copiedText").innerText = data.copiedText;
    //             });
    //     });
    // },0)
});


