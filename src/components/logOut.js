import React from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { CLIENT_ID } from "../variables";

function LogOut() {
  const history = useHistory();
  const onFailure = (e) => {
    console.log(e);
  };

  const onLogoutSuccess = () => {
    const isTokenExists = localStorage.getItem("token");
    if (isTokenExists) {
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
      history.push("/");
    }
  };

  const { signOut } = useGoogleLogout({
    CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  });
  return (
    <div onClick={signOut} className="logoutBtn">
      <button
        style={{
          border: "none",
          backgroundColor: "#363739",
          color: "#f8b300",
          borderRadius: "5px",
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOut;
