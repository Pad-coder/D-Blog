import React from "react";
import Placeholder from "./../assets/Placeholder.jpg";
import { Button } from "react-bootstrap";


function Image({image,title,description}) {
  return <>
      <h2 className="preview">Preview</h2>
     <div style={{border:"1px solid grey", borderRadius:"10px"}}>
     <div>
        <img src={image?image:Placeholder} alt="Add Image" />
      </div>
      <div className="text-area">
        <div>
          <h2>{title?title: "Enter Title"}</h2>
        </div>
        <div>
          <p style={{width: "500px", height:"100%",overflow: "hidden",textOverflow: "ellipsis"}}>{description?description:"Type description"}</p>
        </div>
     </div>
     </div>
        <div style={{margin:"10px auto", }}>
        <Button variant="primary" type="submit" style={{backgroundColor:"#212529", borderColor:"#212529"}}>
        Dashboard
      </Button>
        </div>
      
      
    </>
}

export default Image;
