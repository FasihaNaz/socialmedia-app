import './rightbar.css';
import {Users} from "../../dummyData";
import Online from "../online/Online";

function Rightbar( {profile} ) {
    
    const HomeRightbar = () => {
        return (
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b> 3  ther friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle"> Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}      
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle"> User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle"> User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person5.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person6.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Timmy Drew</span>
                </div>


            </div>
            </>
        )
    }
        
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <ProfileRightbar />
            </div>
        
             
        </div>
    );
}

export default Rightbar;
