import './Topbar.css';
import {Search, Person, Chat, Notifications } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Social</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
            <Search className='searchIcon'/>
            <input className="searchInput" placeholder="Search"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <Link to="/" style={{textDecoration: "none", color:"white"}}>
                    <span className="topbarLink">Homepage</span>
                </Link>
                <span className="topbarLink"></span>
            </div>

            <div className="topbarIcons">
                <Link to="/network" style={{textDecoration: "none", color:"white"}}>
                <div className="topbarIconItem"> 
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                </Link>
                <div className="topbarIconItem"> 
                    <Chat/>
                    {/*<span className="topbarIconBadge"></span>*/}
                </div>
                <div className="topbarIconItem"> 
                <Link to="/notifications" style={{textDecoration: "none", color:"white"}}>
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </Link>
                </div>
            </div>
            <Link to="/profile">
            <img src="/assets/person/person1.png" alt="" className="topbarImg" />
            </Link>
        </div>
    </div>
  )
}

export default topbar