import stylement from "./mentorbadge.module.css";
import style from "./feedback.module.css";
import React, { useState,useEffect } from "react";
import top from "./../../img/pathbot.svg";
import messegaImg from "./../../img/Pathmessage.svg";
import axios from "axios";
import { Link } from "react-router-dom";
// import Header from "./header";
const Feedback = (props) => {
  const { title, description, votes, messages,id} = props.feedback;
  const [votesfeedback, setVotes] = React.useState(votes);
  const [message,setMessage]=React.useState({});
console.log(messages,id)
function data(){
  
}
  function votesClick() {
   setVotes(votesfeedback+1);
      (async function(){
        let response=await axios.put(`http://188.225.31.249:3001/feedbacks/${id}`,{
          "title": {title}.title,
          "description": {description}.description,
          "votes": votesfeedback+1,
          "tags": [
            "NT"
          ],
          "messages": [
            {
              "text": "message text",
              "user": 1,
              "createdDate": "2023-01-10 22:00:23"
            }
          ]
        }).then(async(data)=>{
    setVotes(votesfeedback+1);
        })
      })()
        console.log("oshdi", votesfeedback)
    // })
  }
  return <div className={style.feedback}>
    <span className={style.votes} onClick={votesClick}>
      <img src={top} alt="" />
      <span className={style.feedbacknumber}>{votesfeedback}</span>
    </span>
    <div>
      <h3 className={style.title}>{title}</h3>
      <div className={style.message}>
        <p className={style.description}>{description}</p>
        <div className={style.messageBlok}>
        <Link to={`${id}/message`}><img src={messegaImg}></img>
          </Link>
          <span className={style.feedbacknumber}>
            {messages.length}
          5
          </span>

        </div>
      </div>
      {/* <span className={style.tags}>{tags}</span> */}

      <div className={stylement.badgeAll}>
        {/* <span className={stylement.badgementors}>{tags}</span> */}
        <span className={stylement.badgementors}>iskaskmask</span>
      </div>

    </div>


    {/* {tags} */}
  </div>
}

export default Feedback