/*
Cory Witt
script.js
INFO 1579
Shaw
06/26/2025
*/

//This program will take a monthly salary, calculate the appropriate deductions and net income,
//and display the information to the screen.

"Use Strict";

//This function will take in a subtotal and tax rate, and calculate \ return the deduction value.
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

//This function will take in the gross wages, federal tax, state tax, social security tax,
//Medicare tax, and net wages and print to the screen.
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

const $ = selector => document.querySelector(selector);   //arrow document query selector 

//Event Listener event for Calculate Taxes "click" and 
//"DOMContentLoaded" (contains code that must wait to be executed
//until the HTML is loaded.  

document.addEventListener("DOMContentLoaded", () => {
    $("#calculateTaxes").addEventListener("click", () => { 

  //Get monthlySalary Text Value. Calls $ Arrow function for "#monthlySalary" QuerySelector
  const monthlySalary = parseFloat($("#monthlySalary").value);

  //Calculate Federal Taxes, State Taxes, Social Security Taxes and Medicare Taxes 
  //using calculateTax function

  let federalTax = parseFloat(calculateTax(monthlySalary,.12));          //Federal Tax = 12%
  let stateTax = parseFloat(calculateTax(monthlySalary,.05));            //State Tax = 5 %
  let socialSecurityTax = parseFloat(calculateTax(monthlySalary,.06));   //Social Security Tax = 6%
  let medicareTax = parseFloat(calculateTax(monthlySalary,.015));        //Medicare Tax = 1.5%

  //Calculate Net Salary = Monthly Salary - Federal, State, Social Security, and Medicare Tax
  let netSalary = monthlySalary- federalTax- stateTax-socialSecurityTax-medicareTax;
  
  // Call print function to display information to screen.
  print(monthlySalary,federalTax,stateTax,socialSecurityTax,medicareTax,netSalary);

  console.log('Calculate Taxes clicked!');
     });
});     
 