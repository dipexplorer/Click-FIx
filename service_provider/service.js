//add dynamically
fetch('/Click&FIx/service_provider/services.html')
.then(response => response.text())
.then(data => {
    document.getElementById('left-side-category').innerHTML = data;
});
