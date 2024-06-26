import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container fluid={true} className='container-fluid'>
                    <Row>
                        <Col md='6' className="footer-copyright">
                            <p className="mb-0">Copyright 2024 © UNO All rights reserved.</p>
                        </Col>
                        <Col md='6'>
                            <p className="float-end mb-0">Developed By  <i className="fa fa-heart font-danger" /></p>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    )
}

export default Footer