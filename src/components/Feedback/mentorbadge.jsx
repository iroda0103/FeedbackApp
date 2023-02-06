import styleMentor from "./mentor.module.css";
import style from "./mentorbadge.module.css";
const Badge=()=>{
    return <div className={style.badgementor}>
        <div className={style.badgeAll}>
        <span className={style.badgementors}>All</span>
        <span className={style.badgementors}>UI</span>
        <span className={style.badgementors}>UX</span>
        <span className={style.badgementors}>Enhancement</span>
        <span className={style.badgementors}>Bug</span>
        </div>
        
    </div>
}
export default Badge