import Nav from "./layout/nav";
import Main from "./layout/main";
import Creat from "./components/Feedback/creat";
import Edit from "./components/Feedback/edit";
import Message from "./components/Feedback/message";
import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./stlyes/app.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {

  const [count, setCount] = useState(0);
  const [feedback, setfeedbacks] = useState([]);
  // useEffect(() => {
  //   (async function () {
  //     const response = await axios.get("http://188.225.31.249:3001/feedbacks");
  //     setfeedbacks(response.data);
  //     console.log(response.data, "ssss");
  //   })()
  //   console.log(feedback);

  // }, [])

  //   useEffect(()=>{
  //     (async function(){
  //  const respons=   await axios.post("http://188.225.31.249:3001/feedbacks",{
  //         "title": "Social",
  //         "description": "This is a description for this feedback",
  //         "votes": 77,
  //         "messages": [
  //           {
  //             "text": "message text",
  //             "user": 1,
  //             "createdDate": "2023-01-10 22:00:23"
  //           }
  //         ]
  //       })
  //       // .then(function (respon) {
  //       //   console.log(respon);
  //       //   // setfeedbacks(respon.data)
  //       // })
  //       // .catch(function (error) {
  //       //   console.log(error);
  //       // });
  //       console.log(respons.data,"assssaa")
  //       // setfeedbacks(respons.data)
  //     })()
  //   },)

  return (
    <>

      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/:id/message" element={<Message></Message>} >
              {/* <Routes> */}
              <Route path="edit" element={<Edit></Edit>}></Route>
              {/* </Routes> */}
              
            </Route>
            <Route path="/:id/message/edit" element={<Edit></Edit>} ></Route>
            <Route path="/edit" element={<Edit></Edit>} ></Route>
            <Route path="/" element={<Main ></Main>} />
            <Route path="/creat" element={<Creat></Creat>} />

          </Routes></BrowserRouter>
      </div>
    </>
  );

}

export default App;
