window.addEventListener("DOMContentLoaded", () => {

    var passLength = document.getElementById('passLength')
    var smallLetterCheckbox = document.getElementById('smallLetterCheckbox')
    var capLetterCheckbox = document.getElementById('capLetterCheckbox')
    var numberCheckbox = document.getElementById('numberCheckbox')
    var specialCheckbox = document.getElementById('specialCheckbox')
    var quoteCheckbox = document.getElementById('quoteCheckbox')
    var bracketCheckbox = document.getElementById('bracketCheckbox')
    var submitButton = document.getElementById('submitButton')
    var textArea = document.getElementById('textArea')
    var copyButton = document.getElementById('copyButton')

    var checked = [smallLetterCheckbox, capLetterCheckbox, numberCheckbox, specialCheckbox, quoteCheckbox, bracketCheckbox]

    submitButton.addEventListener("click", function () {
        var charHeap = []
        var passString = []

        var count = 0
        for (var i = 0; i < checked.length; i++) {
            if (checked[i].checked) count++
        }
        if (count > passLength.value) {
            alert('Please enter longer password length')
            return
        }

        if (smallLetterCheckbox.checked) {
            var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }
        if (capLetterCheckbox.checked) {
            var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }
        if (numberCheckbox.checked) {
            var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }
        if (specialCheckbox.checked) {
            var arr = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '|', ':', ';', ',', '.', '/', '?', '~']
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }
        if (quoteCheckbox.checked) {
            var arr = ['"', '\'', '`']
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }
        if (bracketCheckbox.checked) {
            var arr = ['[', ']', '{', '}', '(', ')', '<', '>']
            passString.push(arr[Math.floor(Math.random() * arr.length)])
            charHeap = charHeap.concat(arr)
        }

        for (var i = count; i < passLength.value; i++) {
            var j = Math.floor(Math.random() * (charHeap.length));
            passString.push(charHeap[j])
        }
        for (var i = passString.length - 1; i > 0; i--) { 
            var j = Math.floor(Math.random() * (i + 1));       
            var temp = passString[i];
            passString[i] = passString[j];
            passString[j] = temp;
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