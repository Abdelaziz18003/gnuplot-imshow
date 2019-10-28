"use strict"

const { spawn } = require('child_process');

module.exports = function imshow (ndarray) {
  if (!isNdarray(ndarray) && !isValidImage(ndarray)) {
    throw new Error('Image must be a 2D ndarray or a 3D ndarray having 3 or 4 channels')
  }
  let data = ''
  for (let i = 0; i < ndarray.shape[0]; i++) {
    // get-pixels package always returns a rotated image
    // so we fix this below by counting in reverse
    for (let j = ndarray.shape[1] - 1; j >= 0; j--) {
      data += `${ndarray.get(i, j, 0)} ${ndarray.get(i, j, 1)} ${ndarray.get(i, j, 2)}\n`
    }
    data += '\n\n'
  }

  let gnuplot = spawn('gnuplot', ['-p']);
  gnuplot.stdin.write(`set size square\n`);
  gnuplot.stdin.write(`set autoscale xfix\n`);
  gnuplot.stdin.write(`set autoscale yfix\n`);
  gnuplot.stdin.write(`plot '-' using -2:0:1:2:3 with rgbimage\n`);
  gnuplot.stdin.write(`${data}`);
  gnuplot.stdin.write(`EOF`);
  gnuplot.stdin.end();
}

function isNdarray (array) {
  return (
    array.hasOwnProperty('data') &&
    array.hasOwnProperty('shape') &&
    array.hasOwnProperty('stride') &&
    array.hasOwnProperty('offset')
  )
}

function isValidImage (image) {
  return image.dimension === 2 ||
    image.dimension === 3 && image.shape[2] === 3 ||
    image.dimension === 3 && image.shape[2] === 4
}
