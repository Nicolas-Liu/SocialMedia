import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const profile = () => {
  return (
     <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img className="profileCoverImg" src="/assets/banner.jpeg" alt="" />
                  <img className="profileUserImg" src="/assets/person/person1.png" alt="" />
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">Nicolas Doe</h4>
                  <span className="profileInfoDesc">Welcome to my profile page.</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed profile/>
                <Rightbar profile/>
              </div>
            </div>
        </div>
    </>
  )
}

export default profile