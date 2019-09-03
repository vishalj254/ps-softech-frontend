// import React from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function EactQuill(props) {
//     const[state,setState]=React.useState({text:''})
   
//     const handleChange=(value)=> {
//       setState({ text: value })
//       alert(state.text)
//     }
   
//       return (
//           <div>
//         <ReactQuill value={state.text}
//                     onChange={(event)=>handleChange(event)} />
//                     </div>
//       )
// }

// /*
//  * Custom "star" icon for the toolbar using an Octicon
//  * https://octicons.github.io
//  */
// const CustomButton = () => <span className="octicon octicon-star" />
 
// /*
//  * Event handler to be attached using Quill toolbar module
//  * http://quilljs.com/docs/modules/toolbar/
//  */
// function insertStar () {
//   const cursorPosition = this.quill.getSelection().index
//   this.quill.insertText(cursorPosition, "★")
//   this.quill.setSelection(cursorPosition + 1)
// }
 
// /*
//  * Custom toolbar component including insertStar button and dropdowns
//  */
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
//       <option value="1"></option>
//       <option value="2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <select className="ql-color">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="blue"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-insertStar">
//       <CustomButton />
//     </button>
//   </div>
// )
 
// /*
//  * Editor component with custom toolbar and content containers
//  */
// export default class EactQuill extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { editorHtml: '' }
//     this.handleChange = this.handleChange.bind(this)
//   }
 
//   handleChange (html) {
//   	this.setState({ editorHtml: html });
//   }
 
//   render() {
//     return (
//       <div className="text-editor">
//         <CustomToolbar />
//         <ReactQuill
//           onChange={this.handleChange}
//           placeholder={this.props.placeholder}
//           modules={EactQuill.modules}
//         />
//       </div>
//     )
//   }
// }
 
// /*
//  * Quill modules to attach to editor
//  * See http://quilljs.com/docs/modules/ for complete options
//  */
// EactQuill.modules = {
//   toolbar: {
//     container: "#toolbar",
//     handlers: {
//       "insertStar": insertStar,
//     }
//   }
// }
 
// /*
//  * Quill editor formats
//  * See http://quilljs.com/docs/formats/
//  */
// EactQuill.formats = [
//   'header', 'font', 'size',
//   'bold', 'italic', 'underline', 'strike', 'blockquote',
//   'list', 'bullet', 'indent',
//   'link', 'image', 'color',
// ]
 
// /*
//  * PropType validation
//  */
// EactQuill.propTypes = {
//   placeholder: React.PropTypes.string,
// }
 
// /*
//  * Render component on page
//  */
// // ReactDOM.render(
// //   <Editor placeholder={'Write something or insert a star ★'}/>,
// //   document.querySelector('.app')
// // )
  



//Latest

import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const CustomHeart = () => <span>♥</span>;

function insertHeart() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "♥");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">
      <CustomHeart />
    </button>
  </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

/*
 * Editor component with custom toolbar and content containers
 */
export default function EactQuill(props){
  const [state,setState] = React.useState({ editorHtml: "" });

  const handleChange =(html) => {
    setState({ editorHtml: html });
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertHeart: insertHeart
      }
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          value={state.editorHtml}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </div>
    );
}

