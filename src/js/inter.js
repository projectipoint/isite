document.getElementsByClassName("business").onclick = function() {
    document.getElementById("tag-line").style.visibility = "hidden";
    console.log('business');
}

document.getElementById("stillcustomer").onclick = function() {
    document.getElementById("follow-up").style.visibility = "hidden";
    console.log('clicked')
}