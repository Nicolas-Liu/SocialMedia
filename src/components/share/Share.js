import './share.css';
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import {useContext} from 'react';
//import {AuthContext} from '../../context/AuthContext'


const Share = () => {
    {/*const {user} =useContext(authContext)*/}
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className= "shareProfileImg" src="https://us.123rf.com/450wm/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200082/114296473-priest-avatar-icon-profession-logo-male-character-a-man-in-professional-clothes-people-specialists-f.jpg?ver=6" 
                alt="" />
                <input placeholder="Share your thoughts" 
                className="shareInput"/> 
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="#414fe8" className="shareIcon"/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="#35d4b1" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="#e89541" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="#f7d145" className="shareIcon"/>
                        <span className="shareOptionText">Reactions</span>
                    </div>
                </div>
                <button className="shareButton">
                Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default Share