let codeTagsHC = document.getElementsByTagName("code");
let codeTags = [].slice.call(codeTagsHC);

for (let tag of codeTags) {
    tag.addEventListener("dblclick", function () {

        navigator.clipboard.writeText(tag.innerText).then(function () {
            console.log("clipboard successfully set");
            navigator.clipboard.readText().then(function (clipText) {
                console.log(clipText);
                // chrome.runtime.onMessage.addListener((msg, sender, response) => {
                //     // First, validate the message's structure.
                //     if (msg.from === 'popup2') {
                //         // Collect the necessary data. 
                //         // (For your specific requirements `document.querySelectorAll(...)`
                //         //  should be equivalent to jquery's `$(...)`.)
                //         var data = {
                //             copiedText: clipText
                //         };

                //         // Directly respond to the sender (popup), 
                //         // through the specified callback.
                //         response(data);
                //     }
                // });
            });
        }, function () {
            console.log("clipboard write failed");
        });

    });
}

