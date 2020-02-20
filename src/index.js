
exports.min = function min (array=[]) {
    if (array.length > 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max (array=[]) {
    if (array.length > 0) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg (array=[]) {
    if (array.length > 0) {
        const sum = array.reduce((acc, cV) => acc + cV, 0);
        const n = array.length;
        return sum / n;
    } else {
        return 0;
    }

};
