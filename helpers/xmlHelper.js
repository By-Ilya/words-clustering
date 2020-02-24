const xmlBuilder = require('xmlbuilder');

const XML_PROPS = {
    documentTag: 'document',
    clusterTag: 'cluster',
    wordTag: 'word',

    documentProps: {
        attribute: 'name',
        defaultValue: 'documentName'
    },

    clusterProps: { 'type': 'wordsCluster' },
    wordProps: { 'type': 'word' },
};

createXmlHeader = (documentName) => {
    let xmlHeader = xmlBuilder.create(XML_PROPS.documentTag);
    xmlHeader.att(
        XML_PROPS.documentProps.attribute,
        documentName
            ? documentName
            : XML_PROPS.documentProps.defaultValue
    );

    return xmlHeader;
};

createXmlCluster = (xmlHeader) => {
    return xmlHeader.ele(
        XML_PROPS.clusterTag,
        XML_PROPS.clusterProps
    );
};

createXmlWord = (xmlCluster, data) => {
    return xmlCluster.ele(
        XML_PROPS.wordTag,
        XML_PROPS.wordProps,
        data
    );
};


module.exports = {
    createXmlHeader,
    createXmlCluster,
    createXmlWord
};