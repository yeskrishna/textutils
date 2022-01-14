// import React, {useState} from 'react'


import React, { useState } from 'react';



export default function Textform(props) {
  const handleUpClick = () => {
    console.log("clicked the very insane");
    // setText(toupp)
    let newText = text.toUpperCase();
    setText(newText);
    // toggleMode()
    props.showAlert("Text is in Uppercase","success");
  }
  const handleOnChange = (event) => {
    // console.log("on change was clicked ")
    setText(event.target.value)

  }
  const handlelowClick = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Text is in LowerCase","success");


  }

  const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  // setText("sai krishna manchodu")
  return (
    <>
      <div className="mb-3">
    <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        <button className='btn btn-primary m-2' onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn btn-primary m-2' onClick={handlelowClick}>convert to lowercase</button>
        <p style={{color: props.mode==='dark'?'white':'black'}} >{text.length>0 ? text : 'Enter some thing to preview here'}</p>

        <h2>{text}</h2>
      </div>
      <div className="container">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>your text summery</h1>
        <p style={{color: props.mode==='dark'?'white':'black'}}>{text.split(" ").length} words, {text.length} letters, </p>
        <p style={{color: props.mode==='dark'?'white':'black'}}>  and it takes {text.split(" ").length * 0.008} miutes to read about it</p>
      </div>




    </>



  )
}


