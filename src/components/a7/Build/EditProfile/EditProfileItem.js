import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import moment from "moment";

const currentProfile = (state) => state.profile;


const EditProfileItem = () => {
    let profileData = useSelector(currentProfile);
    profileData = profileData[0];
    const dob = moment(profileData.dateOfBirth, 'M/D/Y').format('MMMM D, Y');
    // console.log(profileData);
    // console.log(profileData.lastName);
    const [values, setValues] = useState({});
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("on change", name, value);
        if(name === "dateOfBirth"){
            // const newDob = moment(value, 'Y/M/D').format('M/D/Y');
            setValues((values) => ({ ...values, [name]: value }));
        }
        else{
            setValues((values) => ({ ...values, [name]: value }));
        }
    };

    const onSubmit = () => {
        console.log("before dispatching", values);
        dispatch({
                     type: "edit-profile",
                     profile: values,
                 });
    };


    return(
        <>
            <div>
                <div className="wd-edit-title">
                    <div className="wd-cancel-button">
                        <Link to="/a7/twitter/profile">
                            <i className="fas fa-times"/>
                        </Link>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="wd-title-text">Edit Profile</span>
                    <div className="wd-save-button">
                        <Link
                            className="btn btn-save"
                            to="/a7/twitter/profile"
                            onClick={onSubmit}
                        >
                            Save
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={profileData.bannerPicture}
                    alt={profileData.bannerPicture}
                    className="wd-coverimg"
                    alt="Cover Image"
                />
            </div>
            <div>
                <img
                    src={profileData.profilePicture}
                    alt={profileData.bannerPicture}
                    className="wd-dpimg"
                    alt="Profile Image"
                />
            </div>
            <div className="wd-edit-details">
                <ul className="list-group">
                    <li className="list-group-item">
                        <label> Name</label>
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profileData.firstName + " " + profileData.lastName}
                            className="form-control"
                            name="name"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Bio</label>
                        <textarea
    onChange={onChangeHandler}
    defaultValue={profileData.bio}
    className="form-control"
    name="bio"
    />
                    </li>
                    <li className="list-group-item">
                        <label> Location</label>
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profileData.location}
                            className="form-control"
                            name="location"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Website</label>
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profileData.website}
                            className="form-control"
                            name="website"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Birth date</label>
                        <input
                            onChange={onChangeHandler}
                            type="date"
                            defaultValue={dob}
                            className="form-control"
                            name="dateOfBirth"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default EditProfileItem;