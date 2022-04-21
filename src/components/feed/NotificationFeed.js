import Post from '../post/Post';
import './feed.css';
import './NotificationFeed.css'
import {Posts} from '../../Data';
import {MoreVert} from "@material-ui/icons";

const NotificationFeed = () => {
  return (
    <div className="notificationPost">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <span className="postUsername">2 minutes ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <img className="notificationImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qTdJYKTM3vRqERc4i7KlOcQXUAkv2TVGmWEf8sAEvMwvUeVT02f8qSWRxQILcQ-IwgY&usqp=CAU"
                alt="post"/>
                <span className="postText"><b>Google</b> is thinking about changing its first letter to an "N". Noodle?</span>
            </div>
        </div>
    </div>
  )
}

export default NotificationFeed