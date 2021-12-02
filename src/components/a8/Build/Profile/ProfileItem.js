import React from "react";
import {useState} from "react";
import moment from 'moment';
// import { useDispatch } from "react-redux";


const Profile = (profileData) => {

    const [buttonPop, setPopup] = useState(false);

    profileData = profileData.data;

    const dob = moment(profileData.dateOfBirth, 'M/D/Y').format('MMMM D, Y');
    const doj = moment(profileData.dateJoined, 'M/Y').format('MMMM Y');
    const web = "https://" + profileData.website;

    return (
        <li className="list-group-item">
            <i className="fas fa-long-arrow-alt-left fa-lg p-3"/>
            <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName} <br/></span>
            <span className="d-block wd-lightText px-5">&nbsp;7000 Tweets</span>
            <br />
            <div>
                <img src={profileData.bannerPicture} alt={profileData.bannerPicture} className="wd-profile-cover-img"/>
                <div className="pt-3 px-2">
                    <img src={profileData.profilePicture} alt={profileData.profilePicture} className="wd-disp-img rounded-circle img-fluid"/>
                    <button className="btn btn-light rounded-pill" onClick={() => setPopup(true)}>Edit Profile</button>
                </div>
            </div>
            <p>
                <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName}</span>
                <span className="d-block wd-profile-desc pt-1">@{profileData.handle} </span>
            </p>
            <p className="fs-6 text fw-lighter">
                {profileData.bio}
                <br />
            </p>

            <span className="wd-profile-desc">
                <i className="fas fa-map-marker-alt"/>&nbsp; {profileData.location} &nbsp;&nbsp;
                <i className="fas fa-link"/>&nbsp; <a href={web} className="wd-profileA">{profileData.website} &nbsp;&nbsp;</a>
                <i className="fas fa-map-pin"/>&nbsp; {dob} &nbsp;&nbsp;
                <i className="fas fa-calendar-alt"/>&nbsp; {doj} &nbsp;&nbsp;
            </span>
            <br />
            {profileData.followingCount} <span className="wd-profile-desc">Following</span> &nbsp;&nbsp;&nbsp;&nbsp;
            {profileData.followersCount} <span className="wd-profile-desc">Followers</span>
        </li>

    )
};

export default Profile;