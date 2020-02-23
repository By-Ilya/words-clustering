require('dotenv').config();

const operationsCost = {
    deleteOperation: parseFloat(process.env.deleteOperationCost) || 1,
    insertOperation: parseFloat(process.env.insertOperationCost) || 1,
    replaceOperation: parseFloat(process.env.replaceOperationCost) || 1,
    swapOperation: parseFloat(process.env.swapOperationCost) || 1
};

module.exports = operationsCost;