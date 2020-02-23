union = (setA, setB) => {
    return new Set([...setA, ...setB]);
};

intersection = (setA, setB) => {
    return new Set([...setA].filter(elem => setB.has(elem)));
};


module.exports = { union, intersection };