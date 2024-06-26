import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import Breadcrumb from "../../components/Common/Breadcrumb";
const DeveloperList = dynamic(
  () => import("../../components/Developer/DeveloperList"),
  { ssr: false }
);

const ListDevelopers = () => {
  return (
    <>
      <Breadcrumb
        title="All Developers"
        titleText="welcome to admin panel"
        parent="Developers"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/developer/add-developer"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top" /> New Developer
                </Link>
              </div>
              <div className="pt-0 card-body">
                <DeveloperList />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListDevelopers;
