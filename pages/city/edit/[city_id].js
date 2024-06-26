import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import CityForm from "../../../components/City/CityForm";
import Link from "next/link";

const EditCity = () => {
  const router = useRouter();
  const [city, setCity] = useState([]);
  const [citySeo, setCitySeo] = useState([]);
  const [cityName, setCityName] = useState();
  const [cityId, setCityId] = useState();
  useEffect(() => {
    setCityId(router.query.city_id)
  }, [router.query.city_id]);
  useEffect(() => {
    if (!cityId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/city/view/${cityId}`).then(function (response) {
      if (response) {
        setCity(response.data?.data.city);
        setCitySeo(response.data?.data.seo);
        setCityName(response.data?.data?.city?.city_name_en)
      }
    });
  }, [cityId]);
  return (
    <>
      <Breadcrumb
        title="Edit Area"
        titleText="Welcome To Admin Panel"
        parent="Areas"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Area : <b className="text-primary">{cityName}</b>
                  <Link
                    href="/city/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  cityId &&
                  <CityForm city={city} seo={citySeo} cityId={router.query.city_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCity;
