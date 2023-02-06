import Feedback from "../components/Feedback/feedback";
import Nav from "./nav";
import Header from "../components/Feedback/header";
// import sass from "./stlyes/loading.scss";
// import sass from "../stlyes/loading.scss";
import sass from "./main.module.scss";
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Main = (props) => {
  // const { feedbacks } = props;
  // const [count,setCount]=useState(0);
  const [feedback,setfeedbacks]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    (async function(){
      setLoading(true)
     const response=await axios.get("http://188.225.31.249:3001/feedbacks");
    setfeedbacks(response.data);
     localStorage.setItem("feedback",JSON.stringify(response.data))
     setLoading(false)
    })()
    
  },[])

if(loading){
  return <div className={sass.circle}>
    <div className={sass.circle1}> </div>
    <div className={sass.circle2}></div>
    <div className={sass.circle3}></div>
  </div>
}

  return (
    <>
     <Nav></Nav>
     <main className="main">
      {/* <header>6 Suggestions</header> */}
     
<Header></Header>
      {feedback.map((feedbac, index) => {
        return <Feedback feedback={feedbac} key={index} />
      })}
     
      
    </main>
    </>
   
  )
}

export default Main