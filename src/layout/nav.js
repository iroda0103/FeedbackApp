import Mentor from "../components/Feedback/mentor";
import MentorBadge from "../components/Feedback/mentorbadge";
import Roadmap from "../components/Feedback/roadmap";
export function Nav() {
    return (
    
        <nav className="sidebar">
            <Mentor></Mentor>
            <MentorBadge></MentorBadge>
        <Roadmap></Roadmap>
                <div>
              
            </div>
        </nav>
    );
}

export default Nav