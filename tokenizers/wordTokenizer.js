 const WORD_SPLIT_REGEX = /[^\s.,!?]+/g;

 wordTokenizer = (text) => {
     return text.match(WORD_SPLIT_REGEX)
         .map(word => word.trim())
         .filter(word => word.toString() !== '');
 };


 module.exports = wordTokenizer;