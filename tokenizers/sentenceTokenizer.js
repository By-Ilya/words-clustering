const SENTENCE_SPLIT_REGEX = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=[.?])(\s|[A-Z].*)/g;

sentenceTokenizer = (text) => {
    return text.split(SENTENCE_SPLIT_REGEX)
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.toString() !== '');
};


module.exports = sentenceTokenizer;