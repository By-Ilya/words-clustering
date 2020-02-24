# words-clustering
Hierarchical words clustering from texts.

## Description
Algorithm performs the following steps:
1. Extracts text from specified `.txt` file.
2. Splits text into sentences and words (using tokenizers).
3. Creates vocabulary (unique words) from all extracted words.
4. Create hierarchical clusters from vocabulary (using different words distance algorithms).
5. Writes obtained clusters to specified `.xml` file.

## Distance algorithms
Distance algorithms is used for step 4 to compare words and calculate distance between them. The following algorithms
have been implemented:

1. **Hamming distance algorithm**.
2. **Damerau-Levenshtein distance algorithm** (4 text operations and operations cost).
3. **Jakkar metric algorithm**.

_Note:_ The algorithm numbers described here are used as the input parameter for starting the main program.

## XML clusters file structure
    <?xml version="1.0"?>
    <document name="documentName">
        <cluster type="wordsCluster">
            <word type="word">...</word>
            ...
        </cluster>
        ...
    </document>

## Requirements
1. `Node JS` library and `NPM` package manager.
2. Libraries installed from `package.json` file.

## Install and configure
1. Go to the project root directory.
2. Run `npm i` or `npm install` command. This command installs necessary libraries.
3. Open `.env` file and configure the following parameters:
- `deleteOperationCost`: `float` number that specifies the cost for _delete_ operation in
**Damerau-Levenshtein distance algorithm** (`1.0` was configured as default value);
- `insertOperationCost`: `float` number that specifies the cost for _insert_ operation in
**Damerau-Levenshtein distance algorithm** (`1.0` was configured as default value);
- `replaceOperationCost`: `float` number that specifies the cost for _replace_ operation in
**Damerau-Levenshtein distance algorithm** (`1.0` was configured as default value);
- `swapOperationCost`: `float` number that specifies the cost for _swap_ operation in
**Damerau-Levenshtein distance algorithm** (`1.0` was configured as default value);

- `minimalClusters`: `integer` number that specifies the number of clusters in 
hierarchical algorithm (`2` was configured as default value);

- `outputFilePath`: `string` value that specifies the `.xml` absolute or relative output file path
(`./output-data/clusters.xml` was configured as default value).

## Running command
In the project root directory run `npm start <filePath> <chosenAlgorithmIndex>` command, where:
- `<filePath>` – absolute or relative path to input `.txt` file;
- `<chosenAlgorithmIndex>` – the index of one of words distance algorithms (`1`, `2` or `3`) from
**Distance algorithms** topic.

#### Example of running commands:
`npm start ./text-examples/book1.txt 2`

## Used `Node JS` libraries
- `n-gram` (version `1.1.2`) is used for creating _n-grams_ from words (for Jakkar metric algorithm);
- `hierarchical-clustering` (version `1.1.0`) is used for create hierarchical clusters from words;
- `xmlbuilder` (version `14.0.0`) is used for building output XML file.
