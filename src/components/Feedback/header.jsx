import style from "./header.module.css";
import lamp from "./../../img/bulb.svg";
import path from "./../../img/Pathtop.svg";
import { Link } from "react-router-dom";
function Header() {



    return <div className={style.headerMain}>
        <div className={style.suggestion}>
            <div className={style.dflex}><img src={lamp} alt="bubl" className={style.bubl} />
                <p className={style.suggestionSuggest}>6 Suggestions</p>
                <p className={style.most}> <span>Sort by</span>: Most Upvotes</p>
                <img src={path} alt="" className={style.path} />
            </div>
            <Link to="/creat"><button className={style.btn} >+ Add Feedback </button></Link>

        </div>
    </div>
}
export default Header
