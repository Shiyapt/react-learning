import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      let newText2=text.toLowerCase();
        setText(newText2);
    }
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const handleClearClick=()=>{
      let newText3="";
        setText(newText3);
    }
    const [text,setText] = useState('');
    return (
      <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} aria-label="With textarea" row="20"></textarea>
    </div>
  <button className="btn btn-outline-success " onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-outline-success mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-outline-success mx-3" onClick={handleClearClick}>Clear All</button>
    </div>
    <div className="container">
            <h4>Your Text summary</h4>
            <p>{text.split(" ").length-1}  Words,{text.length}  Charecters</p>
            <p>{(text.split(" ").length-1)*0.008} Minutes to read</p>
            <h4>Preview</h4>
            <p>{text}</p>
    </div>
    </>
  )
}
