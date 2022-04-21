import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import {Posts} from '../../Data';

const Feed = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
        <Share/>
        <Posts/>

        </div>
    </div>
  )
}

export default Feed