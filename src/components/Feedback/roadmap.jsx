import styleFeedback from "./feedback.module.css";
import styleMentor from "./mentorbadge.module.css";
import style from "./roadmap.module.scss";
function Roadmap(){
    return <div className={styleMentor.badgementor}>
        <div className={style.RoadmapHeader}>
        <h3 className={styleFeedback.title}>RoadMap</h3>
    <a href="#" className={style.view}>View</a>
        </div>
    
    <ul>
        <li> <span className={style.planned}>Planned</span> <span className={style.planNumber}>1</span> </li>
        <li> <span className={style.planned}>In-Progress</span> <span className={style.planNumber}>2</span></li>
        <li> <span className={style.planned}>Live</span> <span className={style.planNumber}>3</span></li>
    </ul>
    </div>
}
export default Roadmap