import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import {LanguagesCode} from "../../../data/Languages";
import Link from "next/link";

const ViewRegisterInterest = () => {
  const router = useRouter();
  const [interestMessage, setInterestMessage] = useState([]);
  const register_interest_id = router.query.register_interest_id;
  useEffect(() => {
    if (!register_interest_id) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/register-interest/view/${register_interest_id}`).then(function (response) {
      if (response) {
        setInterestMessage(response.data?.data);
      }
    });
  }, [register_interest_id]);
  return (
    <>
      <Breadcrumb
        title="Interest Message"
        titleText="Welcome To Admin Panel"
        parent="Interest Message"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Name: <b className="text-primary">{interestMessage?.register_interest_name}</b>
                  <Link
                    href="/register/interest"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <table className="table table-striped table-hover table-bordered">
                  <tbody>

                  <tr>
                    <th>Project</th>
                    <td>{interestMessage?.project_title_en ?? "General Message"}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{interestMessage?.register_interest_name ?? ""}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{interestMessage?.register_interest_email ?? ""}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{interestMessage?.register_interest_phone ?? ""}</td>
                  </tr>
                  <tr>
                    <th>Language</th>
                    <td>{interestMessage?.register_interest_lang_code ? LanguagesCode[interestMessage.register_interest_lang_code] : ""}</td>
                  </tr>
                  <tr>
                    <th>Allow Contact</th>
                    <td>{interestMessage?.register_interest_allow_contact ?? ""}</td>
                  </tr>
                  <tr>
                    <th>Created At</th>
                    <td>{interestMessage?.register_interest_created_at ?? ""}</td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>{interestMessage?.register_interest_message ?? ""}</td>
                  </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewRegisterInterest;
