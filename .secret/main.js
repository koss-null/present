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

    function closeEnvelopeOnHover() {
        var flag = 1;
        if (flag === 1) {
            putIn();
            envelopeTop.classList.remove("open");
            envelopeTop.classList.add("closed");
        } else {
            envelope.removeEventListener('mouseout', closeEnvelopeHover);
        }
    }

    function openEnvelope() {

    }


    // todo change event on "click"
    envelope.addEventListener('mouseover', openEnvelopeOnHover);
    envelope.addEventListener('mouseout', closeEnvelopeOnHover);
    envelope.addEventListener('click', openEnvelope);
})()