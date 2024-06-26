import React, { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import Header from "./header";
import Sidebar from "./sidebar";
import TapToTop from "./TapToTop";
import { useRouter } from "next/router";
import axios from "axios";

const Layout = ({ children }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState();
  const [userData, setUserData] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}dashboard/auth/user-profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("UNO_TOKEN"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("UNO_TOKEN");
          router.push("/authentication/login");
        }
      });

    setToggle(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <Header setToggle={setToggle} toggle={toggle} userData={userData} />
        <div className="page-body-wrapper">
          <Sidebar userData={userData} toggle={toggle} setToggle={setToggle} />
          <div className="page-body">{children}</div>
          <Footer />
        </div>
        <TapToTop />
      </div>
    </>
  );
};

export default Layout;
