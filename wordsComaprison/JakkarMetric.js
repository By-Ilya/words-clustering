const nGram = require('n-gram');

const { union, intersection } = require('../helpers/setsHelper');

const TRIGRAM_START_SYMBOLS = '^^';
const TRIGRAM_END_SYMBOLS = '$$';

calculateJakkarMetric = (word1, word2) => {
    const formattedWord1 = getWordWithStartEndSymbols(word1);
    const formattedWord2 = getWordWithStartEndSymbols(word2);

    const trigramsWord1 = new Set(nGram.trigram(formattedWord1));
    const trigramsWord2 = new Set(nGram.trigram(formattedWord2));

    const trigramIntersectionSize = intersection(
        trigramsWord1, trigramsWord2
    ).size;
    const trigramUnionSize = union(
        trigramsWord1, trigramsWord2
    ).size;

    if (!trigramUnionSize) return 0;

    return trigramIntersectionSize / trigramUnionSize;
};

getWordWithStartEndSymbols = (word) => {
    return TRIGRAM_START_SYMBOLS + word + TRIGRAM_END_SYMBOLS;
};


module.exports = calculateJakkarMetric;