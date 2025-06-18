
//DO NOT MODIFY THIS CODE
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

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
//END DO NOT MODIFY THIS CODE
//YOUR CODE GOES BELOW

const $ = (selector) => document.querySelector(selector);
  // Function body
  // ...
  return /*return value*/;
};


taxButton.addEventListener('click', function() { // Add a click event listener
  // Code to execute when the element is clicked
  console.log('Calculate Taxes clicked!');
});


calcualateTaxes.addEventListener('click', function() { // Add a click event listener
  // Code to execute when the element is clicked.
// Get monthlySalary Text Value 
// Calculate Federal, State Taxes, Social Security Taxes, Medicare Taxes 
// Call print function 


  console.log('Calculate Taxes clicked!');
});

//document.addEventListener('DOMContentLoaded', function() {
  // Your code to execute once the DOM is ready goes here
//  console.log('The DOM has been fully loaded and parsed.');
  // You can now safely access and manipulate elements within the HTML document.//
});


/*  Terminology
    --------------
    Here are some terms, in case you don't understand gross/net wages.

    Gross wages is your full pay, before deductions.

    Net wages is what you actually receive, once taxes, insurance, retirement, etc. have been deducted.
*/

