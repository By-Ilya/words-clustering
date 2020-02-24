const isEqualSymbols = require('../helpers/symbolsComparison');

calculateHammingDistance = (word1, word2, isNormalisedDistance = true) => {
    const wordWithMaxLength = word1.length >= word2.length
        ? word1
        : word2;

    let distance = 0;
    for (let i = 0; i < wordWithMaxLength.length; i++) {
       if (!word1[i] || !word2[i] || !isEqualSymbols(word1[i], word2[i]))
           distance++;
    }

    if (isNormalisedDistance) return (distance / wordWithMaxLength.length);
    return distance;
};


module.exports = calculateHammingDistance;