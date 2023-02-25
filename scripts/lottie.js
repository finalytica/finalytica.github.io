document.addEventListener('DOMContentLoaded', function () {
    LottieInteractivity.create({
        player:'#mail-lottie',
        mode:"scroll",
        actions: [
            {
                visibility: [0.20, 1.0],
                type: "loop",
                frames: [0, 200]
            }, 
            {
                visibility: [-0.10, 0.20],
                type: "stop",
                frames: [0]
            }

            // {
            //     visibility: [0, 1.0],
            //     type:"seek",
            //     frames: [0,200]
            // }
        ]
    });


})
