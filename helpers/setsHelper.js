union = (setA, setB) => {
    return new Set([...setA, ...setB]);
};

intersection = (setA, setB) => {
    return new Set([...setA].filter(elem => setB.has(elem)));
};

createVocabularySet = (wordsArray) => {
    let vocabularySet = new Set();
    wordsArray.forEach(sentenceWords => {
        const sentenceSet = new Set(sentenceWords);
        vocabularySet = union(vocabularySet, sentenceSet);
    });

    return vocabularySet;
};

module.exports = {
    union,
    intersection,
    createVocabularySet
};