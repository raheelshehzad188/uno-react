import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import CommunityForm from "../../../components/Community/CommunityForm";
import Link from "next/link";

const EditCommunityData = () => {
  const router = useRouter();
  const [community, setCommunity] = useState([]);
  const [communityTitle, setCommunityTitle] = useState();
  const [communityId, setCommunityId] = useState();

  useEffect(() => {
    setCommunityId(router.query.community_id)
  }, [router.query.community_id]);
  useEffect(() => {
    if (!communityId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/community/view/${communityId}`).then(function (response) {
      if (response) {
        setCommunity(response.data?.data);
        setCommunityTitle(response.data?.data?.community?.community_title_en)

      }
    });
  }, [communityId]);
  return (
    <>
      <Breadcrumb
        title="Edit Community"
        titleText="Welcome To Admin Panel"
        parent="Communitys"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Community: <b className="text-primary">{communityTitle}</b>
                  <Link
                    href="/community/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  communityId &&
                  <CommunityForm community={community} community_id={router.query.community_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCommunityData;
