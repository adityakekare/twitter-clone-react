import React from "react";
import moment from 'moment';
import {Link} from "react-router-dom";


const Profile = (profileData) => {

    profileData = profileData.data

    const dob = moment(profileData.dateOfBirth, 'M/D/Y').format('MMMM D, Y');
    const doj = moment(profileData.dateJoined, 'M/Y').format('MMMM Y');
    const web = "https://" + profileData.website;

    return (
        <li className="wd-list1 list-group-item">

            <i className="fas fa-long-arrow-alt-left wd-back fa-lg p-3"/>
            <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName} <br/></span>
            <span className="d-block wd-lightText px-5">7000 Tweets</span>
            <br />
            <div>
                <img src={profileData.bannerPicture} alt={profileData.bannerPicture} className="wd-coverimg"/>
                <div className="pt-3 px-2">
                    <img src={profileData.profilePicture} alt={profileData.profilePicture} className="wd-dpimg rounded-circle img-fluid"/>
                    <Link to="/a8/twitter/edit-profile">
                        <button className="btn btn-light rounded-pill">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <p>
                <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName}</span>
                <span className="d-block wd-lightText pt-1">@{profileData.handle} </span>
            </p>
            <p className="fs-6 text fw-lighter">
                {profileData.bio}
                <br />
            </p>

            <span className="wd-lightText">
                <i className="fas fa-map-marker-alt"/>&nbsp; {profileData.location} &nbsp;&nbsp;
                <i className="fas fa-link"/>&nbsp; <a href={web} className="wd-profileA">{profileData.website} &nbsp;&nbsp;</a>
                <i className="fas fa-map-pin"/>&nbsp; {dob} &nbsp;&nbsp;
                <i className="fas fa-calendar-alt"/>&nbsp; {doj} &nbsp;&nbsp;
            </span>
            <br />
            {profileData.followingCount} <span className="wd-lightText">Following</span> &nbsp;&nbsp;
            {profileData.followersCount} <span className="wd-lightText">Followers</span>
        </li>

    )
};

export default Profile;