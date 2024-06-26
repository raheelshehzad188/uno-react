import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchData } from "../../../components/api/fetchData";
import UserForm from "../../../components/User/UserForm";

const EditUserData = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [userTitle, setUserTitle] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(router.query.user_id);
  }, [router.query.user_id]);
  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/user/view/${userId}`).then(
      function (response) {
        if (response) {
          setUser(response.data?.data);
          setUserTitle(response.data?.data?.name);
        }
      }
    );
  }, [userId]);
  return (
    <>
      <Breadcrumb
        title="Edit User"
        titleText="Welcome To Admin Panel"
        parent="Manage Users"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Edit user: <b className="text-primary">{userTitle}</b>
                  <Link
                    href="/manage-users/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {userId && (
                  <UserForm user={user} userId={router.query.user_id} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditUserData;
