function activateEasterEgg() {
    document.body.style.backgroundImage = "url('imgs/baby-yoda-force.jpeg')";
    $(document).click(function (e) {
        alert('THE REBELS ARE HERE!!!');
        document.body.style.backgroundImage = "url('imgs/obi-and-anakin.jpg')";

    });

    var yodaAudio = new Audio('imgs/strong with the force.mp3');
    yodaAudio.play();

    $(document).click(function (e) {
        var lightsaberAudio = new Audio ('imgs/Lightsabers.mp3');
        lightsaberAudio.play();
    });

    //


    alert("WAIT FOR IT...........................................");

}

    var keysUsed = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

    var codeSequence = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

    var codeSequencePosition = 0;

    document.addEventListener('keydown', function (e) {
        var key = keysUsed[e.keyCode];
        var requiredKey = codeSequence[codeSequencePosition];
        if(key == requiredKey){
            codeSequencePosition++;
            if(codeSequencePosition == codeSequence.length){
                activateEasterEgg();
                codeSequencePosition = 0;
            }
        }else{
            codeSequencePosition = 0;
        }
    });


