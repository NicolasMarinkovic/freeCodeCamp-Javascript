function convertToRoman(num) {
    let romanNumber = [];
    let stringNum = JSON.stringify(num);

    for (let i = 1; i < 4; i++) { // los ultimos 3 numeros
        let romanLetter = romanLetters(i); // guardo las letras depende si es unidad,decena,centena
        let arr = romanString(stringNum[stringNum.length-i], romanLetter); // paso el nro y las letras que les corresponde para obtener el valor del nro en romano
        romanNumber.unshift(arr); // agrego el nro romano al principio
    }

    function romanLetters(x) {
        switch (x) {
            case 1:
                return "IVX";
            case 2:
                return "XLC";
            case 3:
                return "CDM";
        }
    }

    function romanString(num,string){
        let first = "";
        if (num == 4){
            return string[0] + string[1];
        }
        if (num == 5){
            return string[1];
        }
        if (num == 9) {
            return string[0]+string[2];
        }
        if (num > 5){ //el 1 ,2 ,3 ,6 ,7 ,8 tienen la misma logica solo que despues del 5 se agrega la letra del medio
            first += string[1];
            num -=5;
        }
        for (let i = 0; i < num; i++) {
            first += string[0];
        }
        return first;
    }

    function addThousands(num){ // Saco la cantidad de miles que hay y agrego una M por cada uno. (si el nro es 100.000 agregaria 100 M's)
        let entero = "";
        for (let i = 0; i < num.length - 3; i++) {
            entero += num[i];
        }
        for (let i = 0; i < entero; i++) {
            romanNumber.unshift("M");
        }
    }

    addThousands(stringNum);
    return romanNumber.join("");
}
  
console.log(convertToRoman(20));