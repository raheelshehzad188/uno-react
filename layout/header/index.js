import React from "react";
import { ChevronsLeft, Maximize, Search } from "react-feather";
import { Col, Row } from "reactstrap";
import Mailbox from "./rightbar/Mailbox";
import Notification from "./rightbar/Notification";
import UserProfile from "./rightbar/UserProfile";

const Header = ({ setToggle, toggle, userData }) => {
  const goFull = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };
  return (
    <>
      <Row className={`page-main-header ${!toggle ? "close_icon" : ""}`}>
        <Col id="sidebar-toggle" className="toggle-sidebar col-auto">
          <ChevronsLeft size={18} onClick={() => setToggle(!toggle)} />
        </Col>
        <Col className="nav-right p-0">
          <ul className="header-menu">
            <li></li>
            <li>
              <Maximize onClick={goFull} />
            </li>
            {/*<Notification />*/}
            {/*<Mailbox />*/}
            <UserProfile userData={userData} />
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Header;
