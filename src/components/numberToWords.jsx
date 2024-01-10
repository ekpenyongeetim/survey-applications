function numberToWords(number) {
  const units = ["", "Thousand", "Million", "Billion", "Trillion"];

  function convertThreeDigits(num) {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    let result = "";
    const [hundreds, tensAndOnes] = [...String(num).padStart(3, "0")].map(
      Number
    );

    if (hundreds > 0) {
      result += ones[hundreds] + " Hundred ";
    }

    if (tensAndOnes > 0) {
      if (tensAndOnes < 10) {
        result += ones[tensAndOnes];
      } else if (tensAndOnes < 20) {
        result += teens[tensAndOnes - 10];
      } else {
        result +=
          tens[Math.floor(tensAndOnes / 10)] + " " + ones[tensAndOnes % 10];
      }
    }

    return result;
  }

  if (number === 0) {
    return "Zero";
  }

  let words = "";
  let unitIndex = 0;

  do {
    const numSegment = number % 1000;
    if (numSegment !== 0) {
      words =
        convertThreeDigits(numSegment) +
        (units[unitIndex] ? ` ${units[unitIndex]}` : "") +
        " " +
        words;
    }
    unitIndex++;
    number = Math.floor(number / 1000);
  } while (number > 0);

  return words.trim();
}

// Example usage:
console.log(numberToWords(123456789));
