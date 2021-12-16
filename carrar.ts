let car;
function transcrire() {
    car = document.conversion.saisie.value;
    car = car.replace(/"/g, "ذ");
    car = car.replace(/q/g, "ض");
    car = car.replace(/w/g, "ص");
    car = car.replace(/e/g, "ث");
    car = car.replace(/r/g, "ق");
    car = car.replace(/t/g, "ف");
    car = car.replace(/y/g, "غ");
    car = car.replace(/u/g, "ع");
    car = car.replace(/ı/g, "ه");
    car = car.replace(/o/g, "خ");
    car = car.replace(/p/g, "ح");
    car = car.replace(/ğ/g, "ج");
    car = car.replace(/ü/g, "د");
    car = car.replace(/a/g, "ش");
    car = car.replace(/s/g, "س");
    car = car.replace(/d/g, "ي");
    car = car.replace(/f/g, "ب");
    car = car.replace(/g/g, "ل");
    car = car.replace(/h/g, "ﺍ");
    car = car.replace(/j/g, "ت");
    car = car.replace(/k/g, "ن");
    car = car.replace(/l/g, "م");
    car = car.replace(/ş/g, "ك");
    car = car.replace(/i/g, "ط­");
    car = car.replace(/z/g, "ي");
    car = car.replace(/x/g, "ء");
    car = car.replace(/c/g, "م");
    car = car.replace(/v/g, "ر");
    car = car.replace(/b/g, "لا");
    car = car.replace(/n/g, "ى");
    car = car.replace(/m/g, "ة");
    car = car.replace(/ö/g, "و");
    car = car.replace(/ç/g, "ز");// burda bitti




    startPos = document.conversion.saisie.selectionStart;
    endPos = document.conversion.saisie.selectionEnd;

    beforeLen = document.conversion.saisie.value.length;
    afterLen = car.length;
    adjustment = afterLen - beforeLen;

    document.conversion.saisie.value = car;

    document.conversion.saisie.selectionStart = startPos + adjustment;
    document.conversion.saisie.selectionEnd = endPos + adjustment;

    let obj = document.conversion.saisie;
    obj.focus();
    obj.scrollTop = obj.scrollHeight;
}