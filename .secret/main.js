'use strict';

(function() {
    console.log("start");
    // getting all elements
    var envelope = document.getElementById('envelope');
    var envelopeTop = document.getElementById('envelopeTop');
    var letter = document.getElementById('contact');
    var left = document.getElementById('left');
    var bottomRight = document.getElementById('bottomRight');
    // set default close
    envelopeTop.classList.add("close");

    // some functions
    function pullOutPatrial() {
        letter.classList.remove("in");
        letter.classList.add("out-partial");
    }

    function openEnvelopeOnHover() {
        envelopeTop.classList.remove("close");
        envelopeTop.classList.add("open");
        pullOutPatrial();
    }

    function putIn() {
        letter.classList.remove("out-partial");
        letter.classList.add("in");
    }

    var flag = 1;

    function closeEnvelopeOnHover() {
        if (flag === 1) {
            putIn();
            envelopeTop.classList.remove("open");
            envelopeTop.classList.add("close");
        } else {
            envelope.removeEventListener('mouseout', closeEnvelopeOnHover);
        }
    }

    function openEnvelope() {
        flag = 0;
        closeEnvelopeOnHover();
        letter.classList.add("pull");
        letter.addEventListener("animationend", function() {
            left.style.zIndex = 0;
            bottomRight.style.zIndex = 0;
            envelopeTop.style.zIndex = 0;
            letter.style.zIndex = 20;
            letter.classList.add("put");
            letter.addEventListener("animationend", function() {
                letter.style.transition = "none";
                letter.classList.add("final");
                letter.classList.remove("put");
                letter.classList.remove("pull");
                envelope.style.cursor = "default";
            });
        });
        envelope.removeEventListener('click', openEnvelope);
    }


    // todo change event on "click"
    envelope.addEventListener('mouseover', openEnvelopeOnHover);
    envelope.addEventListener('mouseout', closeEnvelopeOnHover);
    envelope.addEventListener('click', openEnvelope);
})()