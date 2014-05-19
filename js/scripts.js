 $(document).ready(function(){

        $.ionSound({
            sounds: [
                "metal_plate_2",
            ],
            path: "sounds/",
            volume: "1.0"
        });

        $.ionSound.play("metal_plate_2");

    });