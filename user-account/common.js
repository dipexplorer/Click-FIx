//add dynamically
fetch('/Click&FIx/user-account/common.html')
.then(response => response.text())
.then(data => {
    document.getElementById('user-account-placeholder').innerHTML = data;
});
