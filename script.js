window.addEventListener("DOMContentLoaded", () => {

    var passLength = document.getElementById('passLength')
    var smallLetterCheckbox = document.getElementById('smallLetterCheckbox')
    var capLetterCheckbox = document.getElementById('capLetterCheckbox')
    var numberCheckbox = document.getElementById('numberCheckbox')
    var specialCheckbox = document.getElementById('specialCheckbox')
    var submitButton = document.getElementById('submitButton')
    var textArea = document.getElementById('textArea')
    var copyButton = document.getElementById('copyButton')

    submitButton.addEventListener("click", function () {
        var charHeap = []
        var passString = []
        if (smallLetterCheckbox.checked) {
            var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            charHeap = charHeap.concat(arr)
        }
        if (capLetterCheckbox.checked) {
            var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            charHeap = charHeap.concat(arr)
        }
        if (numberCheckbox.checked) {
            var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            charHeap = charHeap.concat(arr)
        }
        if (specialCheckbox.checked) {
            var arr = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '|', '=', '-', '_', '+']
            charHeap = charHeap.concat(arr)
        }
        for (var i = 0; i < passLength.value; i++) {
            var j = Math.floor(Math.random() * (charHeap.length));
            passString.push(charHeap[j])
        }
        passString = passString.join("")
        textArea.innerText = passString
    })
    copyButton.addEventListener("click", function () {
        var copyText = document.getElementById("textArea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    })

})