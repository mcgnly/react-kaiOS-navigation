## Inject arrow-button navigation for KaiOS into your existing react app
This project fits a need I had trying to port an existing web app to a KaiOS app- without a mouse or touch screen, I had to introduce a way to navigate around the app like you would with the tab button in a browser. I figured, if I had to build this, someone else might be able to use it as well!
Please feel free to contribute issues or suggestions for improvements. 

### How To Use
Check out the example directory!

- ```npm i --s react-kaios-navigation```
- start by importing the navigation injection utility in your index.js of your react app
- call the utility after the render method
- that's it!

This utility takes care to only turn on the KaiOS navigation when the window is 320px or smaller so we can generally assume this is a KaiOS phone, and the assumption is as well that you have already set up the relevant media queries so that your app displays in a somewhat reasonable way on a screen of that size. 

The right and left arrows cycle through the normal things one would focus on during design for accessability for things like screen-readers: links, inputs, textareas, buttons, and things with tabIndex greater than -1. 

The up and down arrows scroll up and down the page. 