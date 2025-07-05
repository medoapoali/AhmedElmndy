/*
طول = م4.60
عرض = س16
تخانه 2.5س
سعر المتر 12.500ج
4.60 * 0.16 * 0.025 = 0.0184 * 12.500 = 230  
*/
let salry = document.getElementById('salary');
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


document.addEventListener('DOMContentLoaded', function() {
    if (salry) {
        salry.addEventListener('input', function(e) {
            let value = this.value.replace(/[^\d]/g, '');
            if (value.length > 0) {
                this.value = parseInt(value, 10).toLocaleString('en-US');
            }
        });
    } 
});

function calc() {
  let ofWidth = +width.value / 100;
  let ofthick = +thickness.value / 100;
  let sntyMetr = +height.value * +ofWidth * +ofthick;
  let total = +sntyMetr * Number(salry.value.replace(/,/g, '')); // Remove commas for calculation
  let reng = total * +num.value;
  let totalReng = +num.value * sntyMetr;
  let totalS = Number(salry.value.replace(/,/g, '')) / total;
  //outbut
  let Total = (outsalry.innerHTML = Math.round(total * 100) / 100);
  let Snty = (volume.innerHTML = sntyMetr.toPrecision(3));
  let Reng = (outNumber.innerHTML = Math.round(reng * 100) / 100);
  let Totalreng = (outVolume.innerHTML = totalReng.toPrecision(3));
  let TotalS = (outS.innerHTML = Math.round(totalS * 100) / 100);
}

clic.onclick = function () {
  totaldiv.style.display = "none";
  // Reset output values
  if (totaldiv.style.display === "none") {
    totaldiv.style.display = "block";
    calc();
  } else {
    totaldiv.style.display = "none";
  }
};
