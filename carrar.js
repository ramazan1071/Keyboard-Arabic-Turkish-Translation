function replaces(){
array1=["é","q","w","e","r","t","y","u","ı","o","p","ğ","ü","a","s","d","f","g","h","j","k","l","ş","i","z","x","c","v","b","n","m","ö","ç","."];
array2=["ظ","ز","و","ة","ى","لا","ر","ؤ","ء","ئ","ط","ك","م","ن","ت","ا","ل","ب","ي","س","ش","د","ج","ح","خ","ه","ع","غ","ف","ق","ث","ص","ض","ذ"];
let a=array2.length;
let key=document.querySelector('#bar');
var car=key.value;
for(let i=0;i<array1.length;i++)
{
    a--;
    car=car.replace(array1[i],array2[a]);
}
 
key.value = car;

}

