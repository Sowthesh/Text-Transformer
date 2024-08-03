import React,{useState} from 'react'


export default function TextForms(props) {

    const handleUpClick = () =>{
        // console.log("ToUpper is clicked" + text);
        let textvalue = text;
        setText(textvalue.toUpperCase());
        // setText("You have clicked on handleup click")
        props.showAlert("Text is converted to uppercase","success");
    }
    const handlelowClick = () =>{
        // console.log("ToUpper is clicked" + text);
        let textvalue = text;
        setText(textvalue.toLowerCase());
        // setText("You have clicked on handleup click")
        props.showAlert("Text is converted to lowercase","success");
    }


    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard","success");
    }

    const handleRemoveSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces are Removed","success")
    }
   
    const [text, setText] = useState("");
  return (
    <>

    <div>
      <div className="mb-3" style = {{color:props.mode==='dark' ? 'white':'black'}}>
        <label htmlFor="mybox" className="form-label my-3">{props.heading}</label>
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey': 'white' , color:props.mode==='dark' ? 'white':'black'}} id="mybox" rows="8" value={text} ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick} > ToUpper </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handlelowClick} > ToLower </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleCopy} > Copy </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveSpaces} > Remove eExtra Spaces </button>
    </div>

    <div className="container" style = {{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>words typed: {text.split(/\s+/).filter((element) => { return element.length!==0 }).length} and characters typed : {text.length}</p>
    </div>
    <div className="container" style = {{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>Preview</h1>
        <p>{text.length>0 ? text:"Type Something in Text Area to Preview"}</p>
    </div>

    </>
    
  )
}
