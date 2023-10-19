/*
طول = م4.60
عرض = س16
تخانه 2.5س
سعر المتر 12.500ج
4.60 * 0.16 * 0.025 = 0.0184 * 12.500 = 230  
*/
let salry = document.getElementById("salry");
let width = document.getElementById("width");
let height = document.getElementById("height");
let thickness = document.getElementById("thickness");
let num = document.getElementById("number");
let outsalry = document.getElementById("outSalry");
let volume = document.getElementById("volume");
let outVolume = document.getElementById("outVolume");
let outNumber = document.getElementById("outNumber");
let outS = document.getElementById("outS");
let clic = document.getElementById("clic");
let totaldiv = document.getElementById("totaldiv");

function calc() {
  let ofWidth = +width.value / 100;
  let ofthick = +thickness.value / 100;
  let sntyMetr = +height.value * +ofWidth * +ofthick;
  let total = +sntyMetr * +salry.value;
  let reng = total * +num.value;
  let totalReng = +num.value * sntyMetr;
  let totalS = +salry.value / total;

  //outbut
  let Total = (outsalry.innerHTML = Math.round(total * 100) / 100);
  let Snty = (volume.innerHTML = sntyMetr.toPrecision(3));
  let Reng = (outNumber.innerHTML = Math.round(reng * 100) / 100);
  let Totalreng = (outVolume.innerHTML = totalReng.toPrecision(3));
  let TotalS = (outS.innerHTML = Math.round(totalS * 100) / 100);

  console.log(total);
  console.log(sntyMetr);
  console.log(reng);
  console.log(totalReng);
  console.log(totalS);
}
calc();
clic.onclick = function () {
  if (totaldiv.style.display === "none") {
    totaldiv.style.display = "block";
    calc();
    Total;
    Snty;
    Reng;
    Totalreng;
    TotalS;
    // volume.push(sntyMetr);
    // outNumber.push(reng);
    // outVolume.push(totalReng);
  } else {
    totaldiv.style.display = "none";
  }
};
