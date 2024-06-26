import Link from "next/link";
import React from "react";
import { FileText, LogIn, User } from "react-feather";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const UserProfile = ({ userData }) => {
  const router = useRouter();

  function logout() {
    axios({
      method: "post",
      url: `${process.env.API_URL}dashboard/auth/logout`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("UNO_TOKEN"), // Replace 'token' with your token
      },
      responseType: "json",
    })
      .then((response) => {
        toast.success(response.data.message);
        localStorage.removeItem("UNO_TOKEN");
        router.push("/authentication/login");
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }

  return (
    <li className="profile-avatar onhover-dropdown">
      <div>
        <img src={userData?.image} className="img-fluid" alt="" />
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {/*<li>*/}
        {/*  <Link href="/manage-users/profile">*/}
        {/*    <span>Account </span>*/}
        {/*    <User />*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href="/myproperties/propertylist">*/}
        {/*    <span>Listing</span>*/}
        {/*    <FileText />*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <a onClick={logout}>
            <span>Log out</span>
            <LogIn />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
