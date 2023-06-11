function isPalindrome(num1, num2) {
    // Convert the numbers to strings
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    // Reverse the strings
    const reversedStr1 = str1.split('').reverse().join('');
    const reversedStr2 = str2.split('').reverse().join('');
  
    // Check if the reversed strings are equal to the original strings
    if (str1 === reversedStr1 && str2 === reversedStr2) {
      return true; // Both numbers are palindromes
    } else {
      return false; // At least one number is not a palindrome
    }
  }
  
  // Example usage
  const number1 = 12321;
  const number2 = 45654;
  
  if (isPalindrome(number1, number2)) {
    console.log("Both numbers are palindromes.");
  } else {
    console.log("At least one number is not a palindrome.");
  }