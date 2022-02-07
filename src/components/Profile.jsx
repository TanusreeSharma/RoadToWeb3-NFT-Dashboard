import React from "react";

const Profile = () => {
    return (
        <div className="profile-section">
            <div className="profile-photo-section">
                <img src="./images/account-head.png" alt="account picture" />
            </div>
            <div className="profile-info-section">
                <div>
                    <span className="me-badge">Me</span>
                    <span className="id-lg"></span>
                </div>
                <span className="id-sm"></span>
            </div>
        </div>
    );
};

export default Profile;
