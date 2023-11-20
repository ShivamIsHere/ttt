import React, { useState,useEffect } from "react";
import "./Profile.css"; 
import data from "./data/data.json";
const Profile = (props) => {
  const [curruser, setcurruser] = useState(props.currUser);

  useEffect(() => {
   
    setcurruser(props.currUser);
  }, [props.currUser]);
 
  return (
    <>
    <div
    style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "50vh",
      width: "100vw",
     // backgroundColor: "blue"
    }}
  >
    <div
      style={{ height: "20vh", width: "100vw", backgroundColor: "purple" }}
    >
      <img
            src={require("./Assets/image/bridge.jpg")}
            alt="Sample"
            style={{
              width: "100%",
              height: "100%",
              objectFit:'fit'
            }}
            
          />
    </div>
    <div
      style={{
        height: "35vh",
        width: "100vw",
        //backgroundColor: "green",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          height: "13vh",
          width: "10vw",
          backgroundColor: "white",
          marginLeft: "25%",
          marginTop: "1%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            height: "6vh",
            width: "10vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <h5>{curruser.name}</h5>
          <img
            src={require("./Assets/image/icons8-diamond-50.png")}
            alt="Sample"
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              backgroundColor: "purple"
            }}
          />
          <img
            src={require("./Assets/image/icons8-check-50.png")}
            alt="Sample"
            style={{ width: "22px", height: "22px", borderRadius: "50%" }}
          />
        </div>
        <div
          style={{
            height: "6vh",
            width: "10vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* part1 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "5vw",

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "4vw",
                backgroundColor: "transparent",
                border: "2px solid grey",
                color: "grey",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px"
              }}
            >
              {curruser.Followers}
            </div>
            <span style={{ color: "grey", fontSize: "12px" }}>
              Followers
            </span>
          </div>
          {/* part2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "5vw",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "4vw",
                backgroundColor: "transparent",
                border: "2px solid grey",
                color: "grey",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px"
              }}
            >
              {curruser.Following}
            </div>
            <span style={{ color: "grey", fontSize: "12px" }}>
              Following
            </span>
          </div>
        </div>
      </div>
      {/* link */}
      <div
        style={{
          height: "13vh",
          width: "30vw",
          // backgroundColor: "red",
          marginLeft: "10%",
          marginTop: "1%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ height: "4vh", width: "30vw" }}>
          Co-founder & CEO at {curruser.ceoAt}
        </div>

        <div style={{ height: "4vh", width: "30vw" }}>
          {" "}
          <a
            style={{
              textDecoration: "none",
              color: "cyan",
              cursor: "pointer"
            }}
            href="www.google.com"
          >
            www.google.com
          </a>
        </div>
        <div
          style={{
            height: "4vh",
            width: "30vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "15%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <img
              src={require("./Assets/image/icons8-star-32.png")}
              alt="Sample"
              style={{ width: "22px", height: "22px", borderRadius: "50%" }}
            />
            <span>{curruser.star}</span>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "15%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <img
              src={require("./Assets/image/icons8-like-80.png")}
              alt="Sample"
              style={{ width: "22px", height: "22px", borderRadius: "50%" }}
            />
            <span>{curruser.like}</span>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "15%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <img
              src={require("./Assets/image/icons8-eye-24.png")}
              alt="Sample"
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "grey"
              }}
            />
            <span>{curruser.seen}K</span>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "15%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <img
              src={require("./Assets/image/icons8-heart-24.png")}
              alt="Sample"
              style={{ width: "22px", height: "22px", borderRadius: "50%" }}
            />
            <span>{curruser.heart}K</span>
          </div>
        </div>
      </div>
    </div>
    {/* your image */}
    <div
      style={{
        position: "absolute",
        top: "25%",
        left: "10%",
        height: "40%",
        width: "10%",
        //backgroundColor: "black",
        borderRadius: "50%"
      }}
    >
      <img
        src={curruser.img}
        alt="Sample"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
    </div>
  </div>
  <div style={{height:'20px',width:'100px',border:'2px solid grey',borderBottomColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
<span style={{color:'cyan'}}>{curruser.post} Posts</span>
      </div>
 </>
  );
};

export default Profile;
