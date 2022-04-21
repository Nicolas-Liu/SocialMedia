import './rightbar.css';
import {Users} from '../../Data';
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return <>
      <div className="birthdayContainer">
            <img className="birthdayImg" 
            src="https://cdn.iconscout.com/icon/free/png-256/birthday-3623583-3027964.png" alt="birthday" />
            <span className="birthdayText">
            {""}
            <b>Jane Doe</b> and <b>2 other friends</b> have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="https://www.maconcentreplex.org/wp-content/uploads/2021/10/BillBurr_WEB_FeatImage_426x640.jpg" 
          alt="ad" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
    </>
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">About</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue"> Tokyo, Japan</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightBarInfoKey">Work:</span>
          <span className="rightBarInfoValue"> Front-End Developer</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightBarInfoKey">Hobbies:</span>
          <span className="rightBarInfoValue"> Music and martial arts</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="https://media.istockphoto.com/vectors/avatar-men-icon-on-a-white-background-vector-id1250988021?k=20&m=1250988021&s=170667a&w=0&h=cmGxdxIcVXRrHZZz7VN7eMb0JudwsykAXIeqGHMMFzw=" alt="friend" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Josh Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt0bT0XouqWYQYFJHkfHj1VFa6Zm057wcFjQKrE-s0Kk8hWgn-PsYUAb_X9EU7oyHsnY&usqp=CAU" alt="person" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">James Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9ws0gy3eDtQYNprnMy7gblzFyV5Sv7jKhkbH9J1VzFxJkgW2WwONLdTqakxlDUmI6A4&usqp=CAU" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jordan Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joanna Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeremy Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jeanne Doe</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar