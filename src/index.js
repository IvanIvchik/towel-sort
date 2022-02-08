
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    if (matrix == null) return res;
    matrix.forEach((element, i) => {
        if (i % 2 === 0) {
            for (let j = 0; j < element.length; j++) {
                res.push(element[j]);
            }
        } else {
            for ( let j = element.length - 1; j >= 0; j--) {
                res.push(element[j]);
            }
        }
    });
   
    return res;
}
