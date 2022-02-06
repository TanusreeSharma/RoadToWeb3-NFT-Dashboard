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
                    <span className="id-lg">0xf903672195f12a02b8fb5fc03e9e3421d13b5458</span>
                </div>
                <span className="id-sm">0xf903672195f12a02b8fb5fc03e9e3421d13b5458</span>
            </div>
        </div>
    );
};

export default Profile;
