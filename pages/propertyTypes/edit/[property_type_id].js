import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import PropertyTypeForm from "../../../components/propertyType/PropertyTypeForm";
import Link from "next/link";

const EditPropertyType = () => {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState([]);
  const [PropertyTypeTitle, setPropertyTypeTitle] = useState();
  const [PropertyTypeId, setPropertyTypeId] = useState();
  useEffect(() => {
    setPropertyTypeId(router.query.property_type_id)
  }, [router.query.property_type_id]);
  useEffect(() => {
    if (!PropertyTypeId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/property-type/view/${PropertyTypeId}`).then(function (response) {
      if (response) {
        setPropertyType(response.data?.data);
        setPropertyTypeTitle(response.data?.data?.property_type_title_en)
      }
    });
  }, [PropertyTypeId]);
  return (
    <>
      <Breadcrumb
        title="Edit Property Type"
        titleText="Welcome To Admin Panel"
        parent="Property Type"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Property Type: <b className="text-primary">{PropertyTypeTitle}</b>
                  <Link
                    href="/propertyTypes/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  PropertyTypeId &&
                  <PropertyTypeForm propertyType={propertyType} agent_id={router.query.property_type_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPropertyType;
