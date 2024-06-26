import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectOptionsTab = ({communities, agents, developers, cities, values, setFieldValue, errors, touched}) => {
    return (
        <>
            <Row>
                <Col sm="4" className="form-group">
                    <Field name='project.project_city_id' type="text"
                           component={ReactstrapSelect}
                           inputprops={{options: cities}}
                           className={`form-control ${
                               errors.project?.project_city_id ? "is-invalid" : ""
                           }`}
                           placeholder="Enter Project City" label="Project City"

                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_city_id'/>
                    </div>
                </Col>
                {/*<Col sm="4" className="form-group">*/}
                {/*    <Field name='project.project_agent_id' type="text"*/}
                {/*           component={ReactstrapSelect}*/}
                {/*           inputprops={{options: agents}}*/}
                {/*           className={`form-control ${*/}
                {/*               errors.project?.project_agent_id ? "is-invalid" : ""*/}
                {/*           }`}*/}
                {/*           placeholder="Enter Project Agent" label="Project Agent"*/}

                {/*    />*/}
                {/*    <div className="invalid-feedback" style={{display: "block"}}>*/}
                {/*        <ErrorMessage name='project.project_agent_id'/>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                <Col sm="4" className="form-group">
                    <Field name='project.project_developer_id' type="text"
                           component={ReactstrapSelect}
                           inputprops={{options: developers}}
                           className={`form-control ${
                               errors.project?.project_developer_id ? "is-invalid" : ""
                           }`}
                           placeholder="Enter Project Developer" label="Project Developer"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_developer_id'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field name='project.project_community_id' type="text"
                           component={ReactstrapSelect}
                           inputprops={{options: communities}}
                           className={`form-control ${
                               errors.project?.project_community_id ? "is-invalid" : ""
                           }`}
                           placeholder="Enter Project Community" label="Project Community"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_community_id'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_is_active"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project active"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_is_active'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_status"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project Status"
                        inputprops={{options: ["New launch", "under construction","ready to move","sold out","upcoming"]}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_status'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_is_show_header_menu"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project show in header menu"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_is_show_header_menu'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_is_show_footer"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project show in footer menu"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_is_show_footer'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_is_featured"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project show in featured"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_is_featured'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_property_is_for_rent"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project Property Is For Rent"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_property_is_for_rent'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_property_is_for_sale"
                        component={ReactstrapSelect}
                        className="form-control"
                        label="Project Property Is For Sale"
                        inputprops={{options: ["", "yes", "no"],}}
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_property_is_for_sale'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.handover"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project handover"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.handover'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        type="number"
                        name="project.project_sorting"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project sorting"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_sorting'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        type="number"
                        name="project.project_starting_price"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project starting price"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_starting_price'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_latitude"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project Latitude"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_latitude'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="project.project_longitude"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project Longitude"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_longitude'/>
                    </div>
                </Col>
                <Col sm="12" className="form-group">
                    <Field
                        name="project.project_properties_map"
                        component={ReactstrapInput}
                        className="form-control"
                        label="Project properties map"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='project.project_properties_map'/>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default ProjectOptionsTab;