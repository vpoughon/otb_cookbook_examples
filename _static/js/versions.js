var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        console.log("ready!");

        if (request.status == 200) {
            console.log(request.responseText);
            document.body.insertAdjacentHTML('beforeend', request.responseText);
        } else {
            console.log("Request for versions.html failed with HTTP ", request.status);
        }
        //document.getElementById('ajax-content').innerHTML = request.responseText;
    } else {
        //console.log("not ready yet: ", request.readyState);
    }
};

request.open('GET', 'versions.html');
request.send();
