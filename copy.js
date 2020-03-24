let codeTagsHC = document.getElementsByTagName("code");
let codeTags = [].slice.call(codeTagsHC);


function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}

// const clickable = document.querySelector('.click-me');
// clickable.addEventListener('click', () => selectText('target'));

for (let tag of codeTags) {
    tag.addEventListener("dblclick", function () {
        console.log(tag);
        selectText(tag);
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

