const { outputPath } = require('./config');
const { writeDataToFile } = require('./helpers/filesHelper');
const {
    createXmlHeader,
    createXmlCluster,
    createXmlWord
} = require('./helpers/xmlHelper');

createXmlFile = async (documentName, clusters) => {
    let xmlRoot = createXmlHeader(documentName);
    clusters.forEach(cluster => {
        let xmlCluster = createXmlCluster(xmlRoot);

        cluster.forEach(word => {
            createXmlWord(xmlCluster, word);
        });
    });

    let xml = xmlRoot.end({ pretty: true });

    await writeDataToFile(
        outputPath + `${documentName}.xml`,
        xml
    );
};


module.exports = createXmlFile;