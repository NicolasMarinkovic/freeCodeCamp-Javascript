function checkCashRegister(price, cash, cid) {
  let acum = 0;
  let change = cash - price;
  let billsToGive = [];
  let cashObject = {      // creo el objeto con el que presentare el status y el change
    status: "default",
    change: "default"
  }
  let changeAmount = [  // creo un array con los valores de cada moneda
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ];
    
  changeAmount.map(function(keyValue) {
      let currentKey = keyValue[0];
      let cidMaximumChange = cid.filter(number => number[0] === currentKey);

      if ((acum + keyValue[1]) <= change && acum < cidMaximumChange.flat()[1]) {  // si el acumulado + la moneda actual supera al cambio no toma la moneda. Por ej, si el cambio es 50 y la moneda es 100 no la toma. Empieza a descontar desde 20.
        
        while ((acum + keyValue[1]) <= change.toFixed(2) && acum < cidMaximumChange.flat()[1]) { // descuenta el cambio
          acum += keyValue[1];
          acum = Number(acum).toFixed(2);  //estas ultimas dos lineas las hago porque a veces al sumar se agregan multiples decimales y me modifica el resultado final
          acum = parseFloat(acum);
        }

        if (changeAmount.indexOf(keyValue) === changeAmount.length-1 && acum < change.toFixed(1)) {
          return billsToGive = [];  // este if es para cuando no hay dinero suficiente para dar vuelto
        }

        billsToGive.push([keyValue[0], parseFloat(acum)]);
        change -= acum; // descuenta el cambio. Por ej si ya guardo 2 billetes de 20 y el cambio era 50, que el cambio que nos quede por cubrir sea 10.
        acum = 0; // reinicio el acumulado
      }
    }
  );

  cashObject["change"] = billsToGive;

  billsToGive.forEach(function(arr) {  // Verifica si la cantidad de elementos en billsToGive coincide con la cantidad de elementos del cid. Que tengan los mismos importes. (esto es para el closed)
    let currentArr = arr[0];
    let currentCid = cid.filter(array => array[0] === currentArr).flat()[1];
    if(parseFloat(arr[1]) == parseFloat(currentCid)){
      acum++;
    };
  })

  if (acum == billsToGive.length){
    cashObject["status"] = "CLOSED";
    cashObject["change"] = cid;
  } else {cashObject["status"] = "OPEN"}
  if (!cashObject["change"].length){
    cashObject["status"] = "INSUFFICIENT_FUNDS";
  } 

  return cashObject;
}
  
console.log(checkCashRegister(17.3, 100, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 2], ["QUARTER", 5], ["ONE", 4], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);