import React, {useEffect, useState} from 'react'
import {Col, Container, Pagination, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import AgentBoxOne from "../../components/agents/AgentBoxOne";
import usePagination from "../../components/utils/usePagination";
import {fetchData} from "../../components/api/fetchData";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const AllAgents = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        fetchData(`${process.env.API_URL}dashboard/agent/get-all`).then(function (response) {
            if (response) {
                setValue(response.data?.data.agents);
            }
        });
    }, []);
    const [Pagination, data] = usePagination(value && value);
    return (<>
        <Breadcrumb title='All Agents' titleText='welcome to admin panel' parent='Agents'/>
        <Container fluid={true}>
            <div className="row">
                <Col lg="12">
                    <div className="card">
                        <div className="card-header">
                            <Link
                              href="/agents/add-agent"
                              className="btn btn-gradient float-right"
                            >
                                <FaPlus className="m-1 align-top"/> New Agent
                            </Link>
                        </div>
                        <div className="pt-0 card-body">
                            <Row className="agent-section property-section agent-lists">
                                <Col lg='12'>
                                    <div className="ratio2_3">
                                        <Row className="property-2 column-sm property-label property-grid">
                                            {data && data.map((item, i) => {
                                                return (<Col xl='4' sm='6' key={i} className='wow fadeInUp'>
                                                    <AgentBoxOne data={item} label={true}/>
                                                </Col>)
                                            })}
                                        </Row>
                                        <Pagination/>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Col>
            </div>

        </Container>
    </>)
}

export default AllAgents