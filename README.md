# Music Tracker

#### Compose and Play music in your browser

#### By _**Andrew Henderson**_

## Technologies Used

* _[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_
* _[jQuery](https://jquery.com/)_
* _[npm](https://www.npmjs.com)_
* _[Webpack](https://webpack.js.org)_
* _[ESLint](https://eslint.org)_
* _[Popper.js](https://popper.js.org/)_
* _[Babel.js](https://babeljs.io/)_
* _[Dotenv](https://www.npmjs.com/package/dotenv)_
* _[WebMIDI]()_
* _[Tone.js]()_

## Description

This is my capstone project for Epicodus. I used layered HTML canvases to make a piano roll and WebMIDI to play the song. Use 1-9 keys to swap between different channels, space to play/pause, and enter to return to the beginning of the song.

## Setup/Installation Requirements

* _Fork or download the project from ```https://github.com/DrewHendersonGitHub/Music-Tracker```._

* _Install [Node JS](https://nodejs.org) in order to build the project if it is not already._

* _Install webpack and other packages by typing ```npm install```._

* _Build the project and start the development live server by typing ```npm run start```._

## Known Bugs

* _Audio playback isn't functional yet_
* _Long notes held from a previous measure won't display properly_

## License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2021_ _Andrew Henderson_

## Research & Planning Log
#### 06/05/2022
* 10:00: browse web looking for example websites
* 10:50: create test repository using react
* 11:00: watch youtube react tutorial
* 1:20: throw together proof of concept layout photography website
* 2:50: research react libraries
* 3:30: redesign photography site layout
* 4:20: watch css animation tutorial on youtube
* 5:00: try adding css

#### 13/05/2022
* 9:00: decide to change project to music website
* 9:20: research audio in javascript
* 10:00: clone Chrome Music Lab project and research it
* 11:30: install webMidi and tone.js in test repository
* 1:20: research canvases
* 2:00: make new repository
* 2:10: make canvas framed in html
* 2:40: make canvas resize to screen size
* 2:10: add homepage
* 2:50: make homepage disapear when loading a song
* 3:10: research drawing rectangles and lines in a canvas
* 3:20: add drawKeys function
* 4:10: make drawKeys add as many keys as specified
* 4:50: figured out how to properly draw white and black keys
* 5:20: add gradient background and added adjustable key sizing

#### 16/05/2022
* 12:20: start adding drawMeasure function
* 12:40: make measure lines be controlled by zoom variable
* 1:40: add smaller lines on each beat
* 2:30: made zoom twice as powerful, added smaller line dividing beats
* 3:10: made drawMeasure be controlled by zoom
* 3:40: research canvas layering
* 4:00: added second canvas on top of base canvas
* 4:10: moved drawMeasure to render on new canvas

#### 17/05/2022
* 8:50: research text rendering inside canvas
* 9:20: added measure count on top above piano roll
* 9:30: research key detection
* 11:00: achieved working horizontal scroll
* 11:30: made measure numbers display correctly which measure instead of 0
* 1:10: add third canvas to render notes on
* 2:00: develop song data object and transcribe star wars theme
* 2:00: add empty song to
* 2:40: update home screen to have song selector
* 1:10: add drawNotes function
* 2:50: parse song data and place note rects on the right pitches on piano roll
* 3:40: parse note and rest length value to space notes horizteonly correct
* 4:50: made drawNotes scalable based on zoom value
* 6:00: removed third canvas and combined notecanvas and measureCanvas into one layer
* 6:30: added gradient on top behind measure numbers

#### 18/05/2022
* 9:00: restructure draw functions to be all called from one draw instead of individually
* 9:50: add notesHelper function
* 11:00: each channel has a unique color
* 11:40: the currently selected channel is filled in with light grey
* 1:10: research bootstrap card
* 1:20: make each song a card on homepage
* 2:30: research css shadows
* 3:00: add styling to homepage
* 3:30: restructure index, removed unused code
* 4:00: research audio playback
* 4:00: try to add midi functionality
* 6:20: give up on midi
* 6:40: adjust styling and graphics
* 6:50: add favicon
* 7:30: refacotr more 

#### 18/05/2022
* 8:20: rework drawMeasure code to be clearer
* 8:50: made drawKeys not render unecessary rects offscreen
* 9:10: prepare presentation notes
* 9:50: adjust appearnes
* 12: 40: add pomp & circumstances graduation song