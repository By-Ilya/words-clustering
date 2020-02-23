const fs = require('fs').promises;
const path = require('path');

isFileExists = async filePath => {
    const resolveFilePath = path.resolve(filePath);
    try {
        await fs.access(resolveFilePath, fs.F_OK);
        return true;
    } catch (err) {
        throw err;
    }
};

readDataBufferFromFile = async (filePath) => {
    const resolvedFilePath = path.resolve(filePath);
    return (async () =>  {
        try {
            return await fs.readFile(resolvedFilePath);
        } catch (err) {
            throw err;
        }
    })();
};

readDataFromFile = async (filePath) => {
    const resolvedFilePath = path.resolve(filePath);
    return (async () =>  {
        try {
            const dataBuffer = await fs.readFile(resolvedFilePath);
            return dataBuffer.toString();
        } catch (err) {
            throw err;
        }
    })();
};

writeDataToFile = async (filePath, data) => {
    const resolvedFilePath = path.resolve(filePath);
    await fs.writeFile(resolvedFilePath, data, (err => {
        if (err) { throw err; }
    }));
};

deleteFile = async (filePath) => {
    const resolvedFilePath = path.resolve(filePath);
    return (async () => {
        try {
            await fs.unlink(resolvedFilePath);
        } catch (err) {
            throw err;
        }
    })();
};

module.exports = {
    isFileExists,
    readDataBufferFromFile,
    readDataFromFile,
    writeDataToFile,
    deleteFile
};