

document.addEventListener('DOMContentLoaded', function () {
    LottieInteractivity.create({
        player:'#mail-lottie',
        mode:"scroll",
        actions: [

            {
                visibility: [0.10, 0.20],
                type:"seek",
                frames: [0,10]
            },
            {
                visibility: [0.20, 1.0],
                type: "loop",
                frames: [10, 10]
            }
            // {
            //     visibility: [-0.10, 0.20],
            //     type: "stop",
            //     frames: [0]
            // }
        ]
    });
})


function openNav() {

    var x = document.getElementById("mobile_menu");

    if (x.style.width === "100%") {
        x.style.width = "0";
    } else {
        x.style.width = "100%";
    }
}