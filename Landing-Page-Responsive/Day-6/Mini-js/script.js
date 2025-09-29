// // checking the Palindrome and the reverse 

// function reversestring (str){
//     return str.split('').reverse().join('')
// };

// const mystring = prompt(' enter string to check Palindrome');
// const revstring = reversestring(mystring);

// console.log (revstring);
// if(mystring === revstring) {alert('This is a Palindrome')} else{alert('This is not a Palindrome');
// }



// // Checking for even and odds 
// const number = prompt('enter the number to check !')
 
// if (number % 2 == 0) {alert ('This is even number !');
// } else {alert ('This is odd number !');
// }


// ✅ Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// ✅ Palindrome Checker
function checkPalindrome() {
    const userInput = prompt("Enter a word or phrase to check:");

    if (!userInput) {
        alert("You did not enter anything.");
        return;
    }
//  ye niche wala copied hai jo bad  mei kia hai mne 
    const cleaned = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = reverseString(cleaned);

    const result = (cleaned === reversed)
        ? "✅ This is a Palindrome!"
        : "❌ This is NOT a Palindrome.";

    console.log(result);
    document.getElementById("result").textContent = result;
}

// ✅ Even or Odd Checker
function checkEvenOdd() {
    const input = prompt("Enter a number to check:");

    // Convert to number
    const number = parseInt(input);

    // Check if valid number
    if (isNaN(number)) {
        alert("❌ That's not a valid number.");
        return;
    }

    const result = (number % 2 === 0)
        ? "✅ This is an Even number."
        : "🔢 This is an Odd number.";

    console.log(result);
    document.getElementById("result").textContent = result;
}
