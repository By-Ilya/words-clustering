const cluster = require('hierarchical-clustering');

const { minClusters } = require('../config');

createClusters = (valuesSet, distanceFunction) => {
    const valuesArray = Array.from(valuesSet);
    const levels = cluster({
        input: valuesArray,
        distance: distanceFunction,
        linkage: linkage,
        minClusters: minClusters
    });

    const clusterIndexes = levels[levels.length - 1].clusters;

    return clusterIndexes.map(cluster => {
        return cluster.map(index => {
            return valuesArray[index]
        });
    });
};

linkage = (distances) => {
    return Math.min.apply(null, distances);
};


module.exports = createClusters;