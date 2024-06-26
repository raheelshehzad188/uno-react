import Link from "next/link";
import React, {useState} from "react";
import SocialAccounts from "../Common/SocialAccounts";
import Img from "../utils/Img";
import {Col, Row} from "reactstrap";

const AgentBoxOne = ({data, label}) => {
    const [show, setShow] = useState();
     return (
        <>
            <div className="property-box">
                <div className="agent-image">
                    <div>
                        <Img src={data?.agent_image} className="bg-img" alt=""/>
                        {label ? data?.properties && <span className="label label-shadow">{data.properties}</span>
                            : data?.label && <span className="label label-shadow">New User</span>}
                        <div className="agent-overlay"></div>
                        <div className="overlay-content">
                            <SocialAccounts data={data}/>
                            <span>Connect</span>
                        </div>
                    </div>
                </div>
                <div className="agent-content">
                    <h3>{data?.agent_name}</h3>
                    <p className="font-roboto">{data?.agent_job}</p>
                    <ul className="agent-contact">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span
                                className="character">{data?.agent_mobile_no === show ? data?.agent_mobile_no : data?.agent_mobile_no.slice(0, 5) + "*****"}</span>
                            <span
                                className="label label-light-danger"
                                onClick={() => {
                                    setShow(data?.agent_mobile_no);
                                    data?.agent_mobile_no === show && setShow();
                                }}>
                                {show === data?.agent_mobile_no ? "hide" : "show"}
                            </span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i> {data?.agent_email}
                        </li>
                        <li>
                            <i className="fas fa-fax"></i> {data?.agent_office_no}
                        </li>
                    </ul>
                    <Row>
                        <Col sm="5">
                            <Link href={{
                                pathname: `/agents/edit/[agent_id]`,
                                query: {
                                    agent_id: data.agent_id,
                                },
                            }}>
                                View profile <i className="fas fa-arrow-right"></i>
                            </Link>
                        </Col>
                        <Col sm="1"></Col>
                        <Col sm="5">
                            <Link href={{
                                pathname: `/agents/reviews/[agent_id]`,
                                query: {
                                    agent_id: data.agent_id,
                                },
                            }}>
                                View Reviews <i className="fas fa-arrow-right"></i>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default AgentBoxOne;

