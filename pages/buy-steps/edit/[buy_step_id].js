import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import BuyStepForm from "../../../components/BuySteps/BuyStepForm";
import Link from "next/link";

const EditBuyStepData = () => {
  const router = useRouter();
  const [buyStep, setBuyStep] = useState([]);
  const [buyStepTitle, setBuyStepTitle] = useState();
  const [buyStepId, setBuyStepId] = useState();
  useEffect(() => {
    setBuyStepId(router.query.buy_step_id)
  }, [router.query.buy_step_id])
  useEffect(() => {
    if (!buyStepId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/buy-step/view/${buyStepId}`).then(function (response) {
      if (response) {
        setBuyStep(response.data?.data);
        console.log(response.data?.data);
        setBuyStepTitle(response.data?.data?.buyStep?.buy_step_title_en)
      }
    });
  }, [buyStepId]);
  return (
    <>
      <Breadcrumb
        title="Edit FAQs"
        titleText="Welcome To Admin Panel"
        parent="FAQs"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit FAQ: <b className="text-primary">{buyStepTitle}</b>
                  <Link
                    href="/buy-steps/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  buyStepId &&
                  <BuyStepForm buyStep={buyStep} buyStepId={router.query.buy_step_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditBuyStepData;
