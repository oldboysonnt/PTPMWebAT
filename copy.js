let codeTagsHC = document.getElementsByTagName("code");
let codeTags = [].slice.call(codeTagsHC);

for (let tag of codeTags) {
    tag.addEventListener("dblclick", function () {

        navigator.clipboard.writeText(tag.innerText).then(function () {
            console.log("clipboard successfully set");
            navigator.clipboard.readText().then(function (clipText) {
                console.log(clipText);
                chrome.storage.local.set({'copiedText': clipText});
            });
        }, function () {
            console.log("clipboard write failed");
        });

    });
}

