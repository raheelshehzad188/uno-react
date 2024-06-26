import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import ServiceForm from "../../../components/Service/ServiceForm";
import Link from "next/link";

const EditService = () => {
  const router = useRouter();
  const [service, setService] = useState([]);
  const [serviceName, setServiceName] = useState();
  const [serviceId, setServiceId] = useState();
  useEffect(() => {
    setServiceId(router.query.service_id)
  }, [router.query.service_id]);
  useEffect(() => {
    if (!serviceId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/service/view/${serviceId}`).then(function (response) {
      if (response) {
        setService(response.data?.data);
        setServiceName(response.data?.data?.service_title_en)
      }
    });
  }, [serviceId]);
  return (
    <>
      <Breadcrumb
        title="Edit Service"
        titleText="Welcome To Admin Panel"
        parent="Services"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Edit Service:
                  <b className="text-primary"> {serviceName}</b>
                  <Link
                    href="/service/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  serviceId &&
                  <ServiceForm service={service} serviceId={router.query.service_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditService;
