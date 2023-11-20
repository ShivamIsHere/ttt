import React, { useState, useEffect } from "react";
import data from "./data/data.json";

const Post = (props) => {
  
const [mypost,setmypost]=useState(props.curruserPost)
useEffect(() => {
  
  setmypost(props.curruserPost);
}, [props.curruserPost]);
    return (
        <>
       <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div  style={{ width: "100px",border:'2px solid white' }}></div>
          <div style={{ width: "95vw",borderTop:'1px solid grey' }}></div>
        </div>
        </div>
        {/* one */}
        {mypost.map((val)=>{
          return (
            <div key={val.id}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <h3 style={{marginLeft:'1vw'}}>{val.title}</h3>
            <img
                  src={require("./Assets/image/icons8-like-80.png")}
                  alt="Sample"
                  style={{ width: "22px", height: "22px", borderRadius: "50%",marginRight:'2vw' }}
                />
                
          </div>
          <div style={{marginLeft:'1vw'}}><p>{val.description}</p>
         </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <span style={{marginLeft:'1vw'}} ><span style={{color:'cyan'}}>thought</span><span> by {val.author}</span></span>
              <span style={{marginRight:'2vw',color:'grey'}}>{val.month} {val.date} -1 min Read . {val.views} Views </span>
          </div>
          </div>
          )
        })}
       
   
        </>
    )
}
export default Post