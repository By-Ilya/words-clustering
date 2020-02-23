const nGram = require('n-gram');

const { union, intersection } = require('../helpers/setsHelper');

const TRIGRAM_START_SYMBOLS = '^^';
const TRIGRAM_END_SYMBOLS = '$$';

calculateJakkarMetric = (word1, word2) => {
    const formattedWord1 = getWordWithStartEndSymbols(word1);
    const formattedWord2 = getWordWithStartEndSymbols(word2);

    const trigramsWord1 = new Set(nGram.trigram(formattedWord1));
    const trigramsWord2 = new Set(nGram.trigram(formattedWord2));

    return (
        intersection(trigramsWord1, trigramsWord2).size / union(trigramsWord1, trigramsWord2).size
    );
};

getWordWithStartEndSymbols = (word) => {
    return TRIGRAM_START_SYMBOLS + word + TRIGRAM_END_SYMBOLS;
};

console.log(calculateJakkarMetric('корова', 'каравай'));