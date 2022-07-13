import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upperChange was clicked" + text);
        let newText = text.toUpperCase();   
        setText(newText);

        props.showAlert("Converted To Upper Case",'success');

    }
    const handleLowClick = ()=>{
        console.log("LowerChange was clicked" + text);
        let newText = text.toLowerCase();
        
        setText(newText);
        props.showAlert("Converted To Upper Case",'success');
    }
    const handleOnChange = (event)=>{
        console.log("OnChange ");
        setText(event.target.value);
       
       
    }
    const clearText = ()=>{
        let newText = ' ';
        setText(newText);
     
       
       
    }
    const changeTextColor = ()=>{
        console.log("Color ")
        let newText = document.body.style.color='red';
        setText(newText);
    }
    const[text,setText] = useState("Enter Text Here");
//    text = " new text"  // wrong way to change the state
//     setText = (" new text")  // right way to change the state

return (
     <>
    <div className='container my-3' style={{color:props.mode=== 'light'?'dark':'light'}}>
      
                <h1>{props.heading}</h1>
                <div className="my-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows ="8" style={{background:props.mode===
                        'light'?'dark':'light'}}> </textarea>

                </div>
                <button type="submit" className="btn btn-primary " onClick={handleUpClick}>Click To UpperCase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLowClick}>Click To LowerCase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={changeTextColor}>Click To Change Color</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={clearText}>Click To Clear</button>
          
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>Above written words {text.split(" ").length} and {text.length}  characters</p>
        <p>You Can Read it in {0.08 *text.split(" ").length}</p>
        <hr />
        <h3>Preview</h3>
        <p>{text.length>0?text:'You Should write some text above to preview it here'}</p>
    </div>
    
    </>
  )
}
TextForm.defaultProps ={
 heading: 'Write Here',
 
  }