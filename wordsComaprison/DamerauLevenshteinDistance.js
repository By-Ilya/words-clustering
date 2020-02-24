const { operationsCost } = require('../config');
const isEqualSymbols = require('../helpers/symbolsComparison');

calculateDamerauLevenshteinDistance = (word1, word2) => {
    let distanceMatrix = initializeMatrixWithZeroValues(
        word1.length, word2.length
    );
    for (let i = 1; i < word1.length; i++) {
        distanceMatrix[i][0] = distanceMatrix[i - 1][0] + operationsCost.deleteOperation;
    }
    for (let j = 1; j < word2.length; j++) {
        distanceMatrix[0][j] = distanceMatrix[0][j - 1] + operationsCost.insertOperation;
    }

    for (let i = 1; i < word1.length; i++) {
        for (let j = 1; j < word2.length; j++) {
            distanceMatrix[i][j] = isEqualSymbols(word1[i], word2[j])
                ? distanceMatrix[i - 1][j - 1]
                : distanceMatrix[i - 1][j - 1] + operationsCost.replaceOperation;
            distanceMatrix[i][j] = Math.min(
                distanceMatrix[i][j],
                (distanceMatrix[i - 1][j] + operationsCost.deleteOperation),
                (distanceMatrix[i][j - 1] + operationsCost.insertOperation)
            );
            if (
                i > 1 &&
                j > 1 &&
                isEqualSymbols(word1[i], word2[j - 1]) &&
                isEqualSymbols(word1[i - 1], word2[j])
            ) {
               distanceMatrix[i][j] = Math.min(
                   distanceMatrix[i][j],
                   distanceMatrix[i - 2][j - 2] + operationsCost.swapOperation
               );
            }
        }
    }

    return distanceMatrix[word1.length - 1][word2.length - 1];
};

initializeMatrixWithZeroValues = (rowLength, columnLength) => {
    let matrix = [];
    for (let i = 0; i < rowLength; i++) {
        matrix[i] = [];
        for (let j = 0; j < columnLength; j++) {
            matrix[i].push(0);
        }
    }

    return matrix;
};


module.exports = calculateDamerauLevenshteinDistance;