import React from "react";
import "./UserContainer.css";

export default function UserContainer({ user }) {
  return (
    <div className="user-container">
      <div>
        <p>User Image</p>
        <img src={user?.avatar_url} alt="user_image" className="avatar" />
      </div>
      <div>
        <p>GitHub User Name</p>
        <p className="user-name">{user?.login}</p>
      </div>
    </div>
  );
}
