import {Languages} from "../../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectCommunityDescriptionTab = ({errors, values, setFieldValue, touched}) => {
    return (
        <>
            <fieldset className="form-control">
                <legend>
                    English Data{" "}
                    <a
                        onClick={() => {
                            Languages.map((lang, i) => {
                                if (lang !== "en") {
                                    setFieldValue(
                                        "community.project_community_desc_" + lang,
                                        values.community.project_community_desc_en
                                    );

                                }
                            });
                        }}
                        className="btn btn-sm btn-link text-primary float-right"
                    >
                        Apply To All Languages
                    </a>
                </legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_en"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_en
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description En"
                            label="Proect Community Description En"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_en"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_ar"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_ar
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description Ar"
                            label="Proect Community Description Ar"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_ar"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_fr"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_fr
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description Fr"
                            label="Proect Community Description Fr"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_fr"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_de"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_de
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description De"
                            label="Proect Community Description De"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_de"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_ru"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_ru
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description Ru"
                            label="Proect Community Description Ru"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_ru"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                    <Col sm="12" className="form-group">
                        <Field
                            name="community.project_community_desc_se"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.community?.project_community_desc_se
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Community Description Se"
                            label="Proect Community Description Se"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="community.project_community_desc_se"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
        </>
    );
}

export default ProjectCommunityDescriptionTab;