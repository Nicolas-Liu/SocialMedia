import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import NetworkFeed from '../../components/feed/NetworkFeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Network = () => {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
             
              
              <div className="profileRightBottom">
                <NetworkFeed/>
                {/*<Rightbar/>*/}
              </div>
            </div>
        </div>
    </>
  )
}

export default Network