let buttonOn = document.getElementById('button');
(buttonOn.onclick = function () {
    "use strict";
    let text = prompt('Choose in which language to produce encryption. \nAnswer options: ukr, eng. \n\n* If the answer is typed incorrectly then English will be selected as the default language.', '');
    switch (text) {
        case "ukr":
            window.CeasarsCipher = function (input) {
                var alphabetUkr = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".toLowerCase(),
                    shiftAmount,
                    shiftedAlphabet = "",
                    OUTPUT = "",
                    STRING,
                    otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, ';
                if (typeof input === "object") {
                    shiftAmount = input.shift;
                    STRING = input.msg.toLowerCase();
                } else {
                    return;
                }
                //Now, we make the whole magic here
                if (typeof STRING === "string" || typeof (STRING + "") === "string") {
                    shiftedAlphabet = alphabetUkr.slice(shiftAmount);
                    shiftedAlphabet += alphabetUkr.slice(0, shiftAmount);
                    shiftedAlphabet += otherCharacters;
                    alphabetUkr += otherCharacters;

                    //Then, we make the output
                    for (var i = 0; i < STRING.length; i++) {
                        var numberd = alphabetUkr.indexOf(STRING[i]);

                        OUTPUT += shiftedAlphabet[numberd];
                    }
                } else {
                    //IF STRING is not a STRING or it is not even present, we drop the function
                    return;
                }
                //RETURNING THE OUTPUT
                return OUTPUT;

            };
            break;
        default:
            window.CeasarsCipher = function (input) {
                var alphabetEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
                    shiftAmount,
                    shiftedAlphabet = "",
                    OUTPUT = "",
                    STRING,
                    otherCharacters = '-=~\"\'#$%&*^:<> ?/!{(|)}.1234567890\, ';
                if (typeof input === "object") {
                    shiftAmount = input.shift;
                    STRING = input.msg.toLowerCase();
                } else {
                    return;
                }
                //Now, we make the whole magic here
                if (typeof STRING === "string" || typeof (STRING + "") === "string") {
                    shiftedAlphabet = alphabetEng.slice(shiftAmount);
                    shiftedAlphabet += alphabetEng.slice(0, shiftAmount);
                    shiftedAlphabet += otherCharacters;
                    alphabetEng += otherCharacters;

                    //Then, we make the output
                    for (var i = 0; i < STRING.length; i++) {
                        var numberd = alphabetEng.indexOf(STRING[i]);

                        OUTPUT += shiftedAlphabet[numberd];
                    }
                } else {
                    //IF STRING is not a STRING or it is not even present, we drop the function
                    return;
                }
                //RETURNING THE OUTPUT
                return OUTPUT;

            };
    }
})();

document.getElementById("message").addEventListener("input", function () {
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: itsValue,
        shift: document.getElementById("shift").value
    });
});
document.getElementById("shift").addEventListener("keyup", function () {
    var itsValue = this.value;
    document.getElementById("output").textContent = CeasarsCipher({
        msg: document.getElementById("message").value,
        shift: itsValue
    });
});

document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: document.getElementById("shift").value
});