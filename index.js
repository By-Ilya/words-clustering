const {
    isFileExists,
    readDataFromFile,
} = require('./helpers/filesHelper');
const {
    sentenceTokenizer,
    wordTokenizer
} = require('./tokenizers/index');
const {
    createVocabularySet
} = require('./helpers/setsHelper');

const args = process.argv.slice(2);

run = async () => {
    if (args.length) {
        try {
            const pathToFile = args[0];
            if (await isFileExists(pathToFile)) {
                const dataFromFile = await readDataFromFile(pathToFile);
                const sentences = sentenceTokenizer(dataFromFile);
                const words = sentences.map(sentence => {
                    return wordTokenizer(sentence);
                });
                const wordsSet = createVocabularySet(words);
                console.log(wordsSet);
            }
        } catch (e) {
            console.log(e);
            process.exit(0);
        }
    } else {
        console.log('No file arguments');
        process.exit(0);
    }
};


run();