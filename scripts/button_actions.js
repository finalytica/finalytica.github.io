function openNav() {

    var x = document.getElementById("mobile_menu");

    if (x.style.width === "100%") {
        x.style.width = "0";
    } else {
        x.style.width = "100%";
    }
}


const functionforscroll = function(id){
    var reqId = "#"+id;
    window.scrollTo(0, $(reqId).offset().top-85);
}