ALPHABET_LENGTH = 26;

function cipher(text, shift) {
    let cipher = '';
    shift = shift % ALPHABET_LENGTH;

    for (let i = 0; i < text.length; i++) {
      let currentChar = text.charCodeAt(i);
      let newCharToAddToCipher = applyShiftToChar(currentChar, shift);
      cipher = cipher.concat(newCharToAddToCipher);
    }
    return cipher;
}

function decipher(text, shift) {
    var decipher = '';
    shift = -shift % ALPHABET_LENGTH;
    for (var i = 0; i < text.length; i++) {
      let currentChar = text.charCodeAt(i);
      let newCharToAddToDecipher = revertApplyShiftToChar(currentChar, shift);
      decipher = decipher.concat(newCharToAddToDecipher);
    }
    return decipher;
}

function applyShiftToChar(currentChar, shift) {
    shiftToApply = applyingShiftExceedsAlphabet(currentChar, shift) ? shift - Alphabet.ALPHABET_LENGTH : shift;
    newCharToAddToCipher = String.fromCharCode(currentChar + shiftToApply);
    return newCharToAddToCipher;
}

function revertApplyShiftToChar(currentChar, shift) {
    shiftToApply = applyingShiftExceedsAlphabet(currentChar, shift) ? shift + Alphabet.ALPHABET_LENGTH : shift;
    newCharToAddToDecipher = String.fromCharCode(currentChar + shiftToApply);
    return newCharToAddToDecipher;
}

function applyingShiftExceedsAlphabet(char, shift) {
    let isValidLetter = !this.exceedsAlphabet(char);
    let letterExceedsWithShift = (this.exceedsAlphabet(char + shift) || this.exceedsAlphabet(char - shift));
    return isValidLetter && letterExceedsWithShift;
}

function exceedsAlphabet(char) {
    char = (char + "").toUpperCase;
    return char < this.LETTERS.A || char > this.LETTERS.Z;
}

console.assert(
    cipher('Hello World', 1) === 'Ifmmp!Xpsme',
    `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
);
  
  console.assert(
    decipher(cipher('Hello World', 3), 3) === 'Hello World',
    `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
);