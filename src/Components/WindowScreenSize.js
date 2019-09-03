import React from 'react';
import windowDimensions from 'react-window-dimensions';
 
// const MyComponent = ({ width, height }) => (
//   <div>
//     The window is {width} x {height}!
//   </div>
// );


// import React from 'react';
// import windowDimensions from 'react-window-dimensions';
import debounce from 'lodash.debounce';
 
const MyComponent = ({ windowWidth,windowHeight,windowWidthOuter,windowHeightOuter }) => (
  <div>
    The window is {windowWidth} pixels wide! {windowHeight}<br/>Outer  {windowWidthOuter} {windowHeightOuter}
  </div>
);
 
export default windowDimensions({
  take: () => ({ windowWidth: window.innerWidth,windowHeight: window.innerHeight,windowWidthOuter: window.outerWidth,windowHeightOuter: window.outerHeight }),
  debounce: onResize => debounce(onResize, 100),
})(MyComponent);

// import WindowSizeListener from 'react-window-size-listener'
// import ReactDOM from 'react-dom'
// import React from 'react'
 
// //  class App extends React.Component {
// //   render() {
// //     return (
// //       <span>
// //         {this.props.windowSize.windowWidth}
// //         {this.props.windowSize.windowHeight}
// //       </span>
// //     );
// //   }
// // }
 
// // export default withWindowSizeListener(App);
// export default function WindowScreenSize(){
// return(
//   <div>
//     <WindowSizeListener onResize={windowSize => {
//       alert('Window height', windowSize.windowHeight)
//       console.log('Window width', windowSize.windowWidth)
//     }}/>
//   </div>
// )
// }