import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Breadcrumb from "../../components/Common/Breadcrumb";
import dynamic from "next/dynamic";

const UserList = dynamic(() => import("../../components/User/UserList"), {
  ssr: false,
});
const List = () => {
  return (
    <>
      <Breadcrumb
        title="All Users"
        titleText="Welcome To Admin panel"
        parent="Manage users"
      />
      <Container fluid={true}>
        <Row className="agent-section property-section user-lists">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/manage-users/add-user"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top" /> New User
                </Link>
              </div>
              <div className="pt-0 card-body">
                <UserList />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default List;
