import './sidebar.css';
import {RssFeed, Chat, VideoLibrary, Bookmark, HelpOutline,Work, Call} from '@material-ui/icons';
import Friend from '../Friend/Friend';
import {Users} from '../../Data';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Sidenar = () => {
  return (
    <>
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Chat className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <VideoLibrary className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <Work className="sidebarIcon"/>
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <Call className="sidebarIcon"/>
          <span className="sidebarListItemText">Contact</span>
        </li>
        <Link to="/profile" style={{textDecoration: "none"}}>
          {/*<button className="sidebarButton">Profile</button>*/}
          <Button className="sidebarButton" variant="outlined">Profile</Button>
        </Link>
      </ul>
      
      <hr className="sidebarHr"></hr>
      <ul className="sidebarFriendList">
              {Users.map(u=>(
                <Friend key={u.id} user={u}/>
              ))}
      </ul>
      </div>
    </div>
    </>
  )
}

export default Sidenar