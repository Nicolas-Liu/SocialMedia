import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import {Posts} from '../../Data';
import './NetworkFeed.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NetworkFeed = () => {
  return (
     <div className="networkPost">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <span className="postUsername">3 minutes ago</span>
                </div>
                <div className="postTopRight">

                </div>
            </div>
            <div className="postCenter">
                <img className="notificationImg" src="https://img.freepik.com/free-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-25.jpg"
                alt="post"/>
                <span className="postText">Jennifer Doe is looking to connect.</span>
            </div>
            <div className="postBottom">

                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                        Accept
                    </Button>
                    <Button variant="outlined" color="error">
                        Decline
                    </Button>
                </Stack>
            </div>
        </div>
    </div>
  )
}

export default NetworkFeed