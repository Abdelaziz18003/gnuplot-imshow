"use strict"

const { spawn } = require('child_process');

module.exports = function imshow (ndarray) {
  let data = ''
  for (let j = 0; j < ndarray.shape[0]; j++) {
    for (let i = 0; i < ndarray.shape[1]; i++) {
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
