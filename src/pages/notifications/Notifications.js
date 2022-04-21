import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import NotificationFeed from '../../components/feed/NotificationFeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Notifications = () => {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
             
              
              <div className="profileRightBottom">
                <NotificationFeed/>
                <Rightbar/>
              </div>
            </div>
        </div>
    </>
  )
}

export default Notifications