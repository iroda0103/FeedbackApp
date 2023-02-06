import React, { Children } from "react";
import Feedback from "./feedback";
import Commit from "./commit";
import style from "./message.module.css";
import { Link,useParams } from "react-router-dom";
import path from "./../../img/Path.svg";
function Message(){
  const params=useParams();
  localStorage.setItem("paramsId",params.id);
  console.log(params.id);
  const data=JSON.parse(localStorage.getItem("feedback"));
  const feedback=data.filter(user=>user.id==params.id);
  console.log(feedback,params.id,data)
  // const {feedback}=props
    // const feedback={
    //     "id": 1,
    //     "title": "Feedback title",
    //     "description": "This is a description for this feedback",
    //     "votes": 12,
    //     "messages": [
    //       {
    //         "text": "message text",
    //         "user": 1,
    //         "createdDate": "2023-01-10 22:00:23"
    //       }
    //     ]
    //   };
    console.log(feedback[0].title,'sskkkkk')
    return <div className={style.app}>
    <div className={style.flex}>
    <Link to="/" className={style.back}><img src={path} className={style.pathImg}/>Go Back</Link>
    <Link to="/edit"><button className={style.editbtn}>Edit Feedback</button></Link>
    
    </div>
    <Feedback feedback={feedback[0]} key={params.id} />
    {/* <Message></Message> */}
    <div className={style.commitBody}>
      
<h3 className={style.messageCount}>4 Comments</h3>
    <Commit></Commit>

<hr  className={style.hr}/>
<Commit></Commit>

salommm 
    </div>
   
    
    </div>
}
export default Message