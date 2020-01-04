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
  imshow(pixels, {title: 'baboon image'})
})
```
![gnuplot-imshow-demo](https://i.imgur.com/hNHi08o.png)