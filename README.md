# gnuplot-imshow
Display an ndarray as an image using gnuplot


## Installation

```bash
npm install gnuplot-imshow
```

## Usage

```js
const getPixels = require('get-pixels')
const imshow = require('gnuplot-imshow');

getPixels('baboon.jpg', (err, pixels) => {
  imshow(pixels)
})
```
![gnuplot-imshow-demo](https://user-images.githubusercontent.com/11301627/67698335-75587a00-f9aa-11e9-87f4-d4b4cef8e4c7.png)