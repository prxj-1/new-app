import React, {useState} from 'react'

// console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase", "success");

    }
    const handleClearClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        // props.showAlert("Text cleared", "success");

    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to clipboard!", "success");

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra spaces have been removed!", "success");

    }
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state.
    // setText("new text"); // correct way to change the state.
    return (
        <div>
            <div className="container" >
                <h3 className='my-3'>{props.heading}</h3>
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} 
                    id="myBox" rows="8"></textarea>
                </div>
                
                <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-info mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-warning mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h4>Your text summary</h4>
                <p>{text.split(" ").length} words, {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </div>
    )
}
