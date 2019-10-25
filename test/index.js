const getPixels = require('get-pixels')
const imshow = require('../src/index')

getPixels('test/lena_gray_256.png', (err, pixels) => {
  console.time('imshow lena image')
  imshow(pixels)
  console.timeEnd('imshow lena image')
})
