
/*
Cory Witt
script.js
INFO 1579
Shaw
06/18/2025
*/

"Use Strict";

//Calculate Tax 
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

//print function
function print(grossWages, federalTax, stateTax, ssTax, medicareTax, netWages) {
    const msg = `
                Gross wages: $${grossWages.toFixed(2)}

                Deductions:
                --------------------------------
                Federal Taxes:   $${federalTax.toFixed(2)}
                State Taxes:     $${stateTax.toFixed(2)}
                Social Security: $${ssTax.toFixed(2)}
                Medicare:        $${medicareTax.toFixed(2)}

                Net wages: $${netWages.toFixed(2)}
    `;
    alert(msg);
}

const $ = selector => document.querySelector(selector);

 document.addEventListener("DOMContentLoaded", () => {
    $("#calculateTaxes").addEventListener("click", () => {

  let federalTax = 0;               //this will hold the calculated federal tax
  let stateTax = 0;                 //this will hold the calculated state tax
  let socialSecurityTax = 0;        //this will hold the calculated social security tax
  let medicareTax = 0;              //this will hold the medicare tax
  let netWages = 0;                 //this will hold the net wages

  // Get monthlySalary Text Value 
  const monthlySalary = parseFloat($("#monthlySalary").value);

  federalTax = monthlySalary * .12;
  stateTax = monthlySalary * .05;
  socialSecurityTax = monthlySalary * .06;
  medicareTax = medicareTax * .015;
  netWages = monthlySalary - federalTax - stateTax - socialSecurityTax - medicareTax;
   
// Calculate Federal, State Taxes, Social Security Taxes, Medicare Taxes 
  print.call(this,monthlySalary,federalTax,stateTax,socialSecurityTax,medicareTax,netWages);

  console.log('Calculate Taxes clicked!');
     });
});     
 