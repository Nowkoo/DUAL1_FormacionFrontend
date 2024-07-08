class Alphabet {
    static ALPHABET_LENGTH = 26;
    static LETTERS = {A: 65, Z: 90}

    exceedsWithShift(char, shift) {
        let isLetter = !this.exceeds(char);
        let exceedsWithShift = (this.exceeds(char + shift) || this.exceeds(char - shift));
        return isLetter && exceedsWithShift;
    }

    exceeds(char) {
        char = (char + "").toUpperCase;
        return char < Alphabet.LETTERS.A || char > Alphabet.LETTERS.Z;
    }
}

window.Alphabet = Alphabet;