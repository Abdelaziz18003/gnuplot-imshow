const getPixels = require('get-pixels')
const imshow = require('../src/index')

getPixels('test/baboon_rgb_256.jpg', (err, pixels) => {
  imshow(pixels)
})
