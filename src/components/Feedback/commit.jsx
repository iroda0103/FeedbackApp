import React from "react";
import style from "./commit.module.scss";
import img from '../../img/Oval.png';
function Commit(){
return <div>
<div className={style.person}>
    <div><img src={img} alt="" /></div>
    <div>
        <div className={style.headerMessage}>
            <h4 className={style.name}>Elijah Moss
            <p className={style.title}>@hexagon.bestagon</p>
            </h4>
            <span className={style.reply}>Reply</span>
        </div>
        <p className={style.persomMessage}>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>

    </div>
  
</div>
{/* <Commit></Commit> */}
</div>
}
export default Commit