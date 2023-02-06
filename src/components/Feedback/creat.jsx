import styleGlobal from "./../../stlyes/global.scss";
import React, { useState, useEffect } from "react";
import stylheader from "./header.module.css";
import style from "./creat.module.css";
import axios from "axios";
import path from "./../../img/Path.svg";
import { Link, Navigate,useNavigate } from "react-router-dom";
function Creat() {
    const navigate=useNavigate()
    function nav(){
        navigate("/");
    }
    let creatUser = {};
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Feature");
    const [comments, setComments] = useState("");
    const [addUser, setAddUser] = useState({});




    return <div className={style.container}>
        <h5 className={style.back}><Link to="/"><img src={path} className={style.pathImg}/>Go Back</Link></h5>
        {/* <Link to="/" className={style.back}><img src={path} className={style.pathImg}/>Go Back</Link> */}
         <div className={style.creat}>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log({ title }, { category }, { comments })

            creatUser = {
                "title": { title }.title,
                "description": { comments }.comments,
                "votes": 0,
                "tags": [
                    { category }.category
                ],
                "messages": [
                    // {
                    //   "text": "",
                    //   "user": 0,
                    //   "createdDate": ""
                    // }

                ]
            }
            setAddUser(creatUser);
            (async function () {
                const response = await axios.post("http://188.225.31.249:3001/feedbacks", { creatUser }.creatUser);

                console.log(response.data, "new data");
            })()
            console.log("hbhh");
            navigate("/")
        }}>
            <h3 className={style.formHeader}>Create New Feedback</h3>
            <label>
                
                <p className={style.label}>Feedback Title</p>
                <p className={style.labelParagraph}>Choose a category for your feedback</p>
            </label>
            <input type="text"  onChange={(e) => {
                setTitle(e.target.value)
            }} />
             <label>
                
                <p className={style.label}>Category</p>
                <p className={style.labelParagraph}>Choose a category for your feedback</p>
            </label>
            <select name="category" id="" onChange={(e) => {
                setCategory(e.target.value)
            }}>
                <option value="Feature">Feature</option>
                <option value="Enhancement">Enhancement</option>
                <option value="Bug">Bug</option>
            </select>
            <label>
                
                <p className={style.label}>Feedback Detail</p>
                <p className={style.labelParagraph}>Include any specific comments on what should be improved, added, etc.</p>
            </label>
            <textarea name="details" id="" cols="30" rows="10"  onChange={(e) => {
                setComments(e.target.value)
            }}></textarea>
            <div className={style.btn}>
<span className={style.cancel} onClick={()=>{
    document.querySelector("form").classList.add(style.none);
}}>Cancel</span>
            <button className={stylheader.btn}>Add Feddback</button>
            </div>
            <div className={style.plus}></div>
        </form>
    </div>
    </div>
   
}
export default Creat