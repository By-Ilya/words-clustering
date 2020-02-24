const {
    isFileExists,
    getDocumentName,
    readDataFromFile,
} = require('./helpers/filesHelper');
const {
    sentenceTokenizer,
    wordTokenizer
} = require('./tokenizers/index');
const { createVocabularySet } = require('./helpers/setsHelper');
const {
    calculateHammingDistance,
    calculateDamerauLevenshteinDistance,
    calculateJakkarMetric
} = require('./wordsComaprison/index');
const createClusters = require('./clustering/hierarchical-clustering');
const createXmlFile = require('./createXml');

const args = process.argv.slice(2);

runClustering = async () => {
    if (args.length >= 2) {
        try {
            const pathToFile = args[0];
            const algorithmIndex = parseInt(args[1]);

            if (await isFileExists(pathToFile)) {
                const dataFromFile = await readDataFromFile(pathToFile);
                const sentences = sentenceTokenizer(dataFromFile);
                const words = sentences.map(sentence => {
                    return wordTokenizer(sentence);
                });
                const wordsSet = createVocabularySet(words);

                const distanceAlgorithm = chooseDistanceAlgorithm(
                    algorithmIndex
                );
                const wordsClusters = createClusters(
                    wordsSet,
                    distanceAlgorithm
                );

                await createXmlFile(
                    getDocumentName(pathToFile),
                    wordsClusters
                );
                console.log('Words clustering has ended successfully!');
                process.exit(0);
            }
        } catch (e) {
            console.log(e);
            process.exit(0);
        }
    } else {
        console.log('Error: Incorrect command to start.');
        console.log(`Run 'npm start $filePath $chosenAlgorithmIndex'`);
        process.exit(0);
    }
};

chooseDistanceAlgorithm = (algorithmIndex) => {
    switch (algorithmIndex) {
        case 1:
            console.log(`Chosen algorithm: 'HammingDistance'`);
            return calculateHammingDistance;
        case 2:
            console.log(`Chosen algorithm: 'DamerauLevenshteinDistance'`);
            return calculateDamerauLevenshteinDistance;
        case 3:
            console.log(`Chosen algorithm: 'JakkarMetric'`);
            return calculateJakkarMetric;
        default:
            console.log(`Default algorithm: 'HammingDistance'`);
            return calculateHammingDistance;
    }
};


runClustering();