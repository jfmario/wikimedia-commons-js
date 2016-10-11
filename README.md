
# Wikimedia Commons #

A place where I'm putting functions for dealing with Wikimedia Commons.

## Current Functionality #

* Get Picture of the day

## Getting Started #

### Installation #

`npm install git://github.com/johnfmarion/wikimedia-commons-js`

### Get Picture of the Day #

Pulls the picture of the day and writes it to `output/latest.jpg`.

```
node index.js dailypic
```

The full url of the original image will be written to `output/image_link.txt`.