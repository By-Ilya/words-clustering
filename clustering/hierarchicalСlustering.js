const cluster = require('hierarchical-clustering');

createClusters = (valuesSet, distanceFunction) => {
    const valuesArray = Array.from(valuesSet);
    const levels = cluster({
        input: valuesArray,
        distance: distanceFunction,
        linkage: linkage,
        minClusters: Math.round(valuesSet.size / 2)
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