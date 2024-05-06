let nameInput = document.getElementById('input-name')

document.getElementById('send').addEventListener("click", function() {
    const nama =nameInput.value

    if (nama == "") {
        document.getElementById('error-text').innerHTML = "aa"
    }
    else {
        document.getElementById('error-text').innerHTML = "bb"
    }
})