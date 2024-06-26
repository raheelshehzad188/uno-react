import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import FacilityForm from "../../../components/Facility/FacilityForm";
import Link from "next/link";

const EditFacility = () => {
  const router = useRouter();
  const [facility, setFacility] = useState([]);
  const [facilityName, setFacilityName] = useState();
  const [facilityId, setFacilityId] = useState();
  useEffect(() => {
    setFacilityId(router.query.facility_id)
  }, [router.query.facility_id]);
  useEffect(() => {
    if (!facilityId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/facility/view/${facilityId}`).then(function (response) {
      if (response) {
        setFacility(response.data?.data);
        setFacilityName(response.data?.data?.facility_title_en)
      }
    });
  }, [facilityId]);
  return (
    <>
      <Breadcrumb
        title="Edit Facility"
        titleText="Welcome To Admin Panel"
        parent="Facilities"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Facility: <b className="text-primary">{facilityName}</b>
                  <Link
                    href="/facility/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  facilityId &&
                  <FacilityForm facility={facility} facilityId={router.query.facility_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditFacility;
