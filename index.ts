// 1. Reversing a string but the number characters are excluded from being reversed
function forbidNumCharFromStringRev(input: string): string {
    const letters = input.replace(/\d/g, '');
    const numbers = input.replace(/\D/g, '');
    const reversedLetters = letters.split('').reverse().join('');
    return reversedLetters + numbers;
}
const output_one: string = forbidNumCharFromStringRev("negie1");
console.log("1", output_one);

// 2. Find the longest word from a sentence
function findLongestWord(sentence: string): string {
    const words: string[] = sentence.split(/\s+/g);
    let longestWord: string = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord;
}
const output_two: string = findLongestWord("You are my fire.");
console.log("2", output_two);

// 3. Determine the number of times the values of Y appeared in X
function countOccurences(X: string[], Y: string[]): number[] {
    const occurences: number[] = []
    for (const y of Y) {
        const count = X.filter(x => x === y).length;
        occurences.push(count);
    }
    return occurences;
}
const X: string[] = ['xc', 'dz', 'bbb', 'dz'];
const Y: string[] = ['bbb', 'ac', 'dz'];
const output_three: number[] = countOccurences(X, Y);
console.log("3", output_three);

// 4. Diagonal matrix subtraction
function diagonalMatrixSubstract(matrix: number[][]): number {
    const matrixRows = matrix.length;
    const matrixCols = matrix[0].length;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0; i < matrixRows; i++) {
        firstDiagonalSum += matrix[i][i];
    }
    for (let i = 0; i < matrixRows; i++) {
        secondDiagonalSum += matrix[i][matrixCols - 1 - i];
    }
    const result = firstDiagonalSum - secondDiagonalSum;
    return result;
}
const matrix: number[][] = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const output_four = diagonalMatrixSubstract(matrix);
console.log("4", output_four);