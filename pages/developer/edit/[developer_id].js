import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchData } from "../../../components/api/fetchData";
import DeveloperForm from "../../../components/Developer/DeveloperForm";

const EditDeveloperData = () => {
  const router = useRouter();
  const [developer, setDeveloper] = useState([]);
  const [developerTitle, setDeveloperTitle] = useState("");
  const [developerId, setDeveloperId] = useState();

  useEffect(() => {
    setDeveloperId(router.query.developer_id);
  }, [router.query.developer_id]);
  useEffect(() => {
    if (!developerId) {
      return;
    }
    fetchData(
      `${process.env.API_URL}dashboard/developer/view/${developerId}`
    ).then(function (response) {
      if (response) {
        setDeveloper(response.data?.data);
        setDeveloperTitle(response.data?.data?.developer?.developer_title_en);
      }
    });
  }, [developerId]);
  return (
    <>
      <Breadcrumb
        title="Edit Developer"
        titleText="Welcome To Admin Panel"
        parent="Developers"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Edit Developer:{" "}
                  <b className="text-primary">{developerTitle}</b>
                  <Link
                    href="/developer/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {developerId && (
                  <DeveloperForm
                    developer={developer}
                    developer_id={router.query.developer_id}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditDeveloperData;
