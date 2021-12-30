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
        var elements = document.getElementsByClassName('letter');

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.style.fontSize = "19px";
        }
        letter.innerHTML = "Женя, с Днем Рождения<br>Спасибо тебе, что остаешься для меня верной подругой и любимой любимой!<br>Ты прекрасна в своем многообразии настроений и планов, пусть иногда мне что-то в них не понятно, но я верю, что понятно тебе!<br>Или, по крайней мере, ты пытаешься с этим разобраться.<br>Я очень люблю тебя, и хочу, чтобы в этом году вирусы наконец отступили, и ты смогла заняться тем, что ты так любишь - путешествовать.<br>Поэтому мой подарок - это заявление.<br> Заявляю, что готов не только оплатить отель или билеты куда угодно, но еще и отправиться с тобой (конечно, если тебе захочется).<br> Чтобы не случилось ситуации с моим банкротством, предлагаю рассматривать этот подарок как <u>сертификат на 30000 рублей</u> без срока действия :)<br>Дима";
        envelope.removeEventListener('click', openEnvelope);
    }


    // todo change event on "click"
    envelope.addEventListener('mouseover', openEnvelopeOnHover);
    envelope.addEventListener('mouseout', closeEnvelopeOnHover);
    envelope.addEventListener('click', openEnvelope);
})()