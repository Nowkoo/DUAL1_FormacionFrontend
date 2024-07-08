class Cipher {
    cipher(text, shift) {
        let cipher = '';
        shift = shift % Alphabet.ALPHABET_LENGTH;
    
        for (let i = 0; i < text.length; i++) {
          let currentChar = text.charCodeAt(i);
          let newCharToAddToCipher = this.applyShiftToChar(currentChar, shift);
          cipher = cipher.concat(newCharToAddToCipher);
        }
        return cipher;
    }

    decipher(text, shift) {
        const cipher = new Cipher();
        return cipher.cipher(text, -shift);
    }

    applyShiftToChar(currentChar, shift) {
        const alphabet = new Alphabet();
        let shiftToApply = alphabet.exceedsWithShift(currentChar, shift) ? shift - Alphabet.ALPHABET_LENGTH : shift;
        let newCharToAddToCipher = String.fromCharCode(currentChar + shiftToApply);
        return newCharToAddToCipher;
    }
}

window.Cipher = Cipher;