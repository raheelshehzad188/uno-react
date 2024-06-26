import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const PageList = dynamic(
    () => import("../../components/Page/PageList"),
    {ssr: false}
);

const Pages = () => {
    return (
        <>
            <Breadcrumb title='Dashboard / Pages' titleText='Pages List' parent='Pages'/>
            <Container fluid={true}>
              <div className="row">
                <Col lg="12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="pt-0 card-body">
                      <PageList/>
                    </div>
                  </div>
                </Col>
              </div>
            </Container>
        </>
    )
}

export default Pages;

